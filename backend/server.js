const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const AWS = require('aws-sdk')
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const app = express();
const fs = require('fs');

require('dotenv').config()

const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
};

app.use(express.json());
app.use(cors(corsOptions));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    next();
});

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
    } else {
        console.log('Connected to the database');
    }
});


AWS.config.update({
    accessKeyId: process.env.AWS_ACCESSKEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESSKEY,
    region: process.env.AWS_REGION,
})

const s3 = new AWS.S3()





app.get('/allhomes', (req, res) => {
    db.query(
        "SELECT * FROM propertyData",
        (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).json(err)
            } else {
                res.status(200).json(result)
            }
        }
    )
})
app.post('/uploadAwsImages', upload.single('image'), (req, res) => {
    const imageFile = req.file;

    const params = {
      Bucket: 'imageshouses',
      Key: imageFile.originalname,
      Body: require('fs').createReadStream(imageFile.path),
      ContentType: imageFile.mimetype,
      ContentDisposition: 'inline',
    };

    s3.upload(params, (err, data) => {
      if (err) {
        console.error('Error uploading to S3:', err);
        return res.status(500).send(err.message);
      } else {
        console.log('Image uploaded to S3:', data.Location);
        
        fs.unlink(imageFile.path, (unlinkErr) => {
          if (unlinkErr) {
            console.error('Error deleting temporary file:', unlinkErr);
          } else {
            console.log('Temporary file deleted successfully');
          }
        });
        
        return res.status(200).json(data.Location);
      }
    });
})

app.post('/uploadData', (req, res) => {
    const formData = req.body
    
    db.query(
        `INSERT INTO propertyData 
        (street, streetNo, zipCode, location, rooms, livingArea, areaProperty, purchasePrice, quality, typeHouse, floors, bathroom, bedroom, usableArea, phase, title, objectDescription, furniture, position, various, firstName, lastName, telephone, email) 
        VALUES 
        ('${formData.street}', '${formData.streetNumber}', '${formData.zipCode}', '${formData.location}', ${formData.rooms}, ${formData.livingArea}, ${formData.areaProperty}, ${formData.purchasePrice}, '${formData.Facilities}', '${formData.houseType}', ${formData.floorsNumber}, ${formData.bathroomsNumber}, ${formData.bedroomsNumber}, ${formData.usableArea}, '${formData.constructionPhase}', '${formData.title}', '${formData.objectDescription}', '${formData.furniture}', '${formData.position}', '${formData.various}', '${formData.firstName}', '${formData.lastName}', '${formData.telephone}', '${formData.email}')`,
        (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).json(err);
            } else {
                let propertyId = result.insertId
                db.query(
                    `INSERT INTO propertyManage (propertyId, password)
                    VALUES ('${propertyId}', '${formData.Password}')`,
                    (err) => {
                        if (err) {
                            console.error(err);
                            res.status(500).json(err)
                        } else {
                            res.status(200).json(result)
                        }
                    }
                )
            }
        }
    );
});

app.post('/uploadDataImages', (req, res) => {
    const { id, images } = req.body

    images.forEach(image => {
        db.query(
            `INSERT INTO propertyImages (propertyId, image) VALUES ('${id}', '${image.data}')`,
            (err) => {
                if (err) {
                    console.log(err);
                    res.status(500).json(err)
                } else {
                    res.status(200).json()
                }
            }
        )
    });
})

app.post("/firstImage", (req, res) => {
    const { id, image } = req.body

    db.query(
        "UPDATE propertyData SET image = ? WHERE id = ?",
        [image, id],
        (err) => {
            if (err) {
                console.log(err);
                res.status(500).json(err)
            } else {
                res.status(200).json()
            }
        }
    )
})
app.post('/create-password', (req, res) => {
    const { pass, id } = req.body

    db.query(
        "INSERT INTO  propertyManage (propertyId, password) VALUES (?, ?)",
        [id, pass],
        (err, result) => {
            if (err) {
                console.error(err);
                res.status(500).json(err)
            } else {
                res.status(200).json(result)
            }
        }
    )
})
app.get('/all-property-images', (req, res) => {
    const { propertyId } = req.query

    db.query(
        "SELECT * FROM propertyImages WHERE propertyId = ?",
        [propertyId],
        (err, result) => {
            if (err) {
                console.error(err);
                res.status(500).json(err)
            } else {
                res.status(200).json(result)
            }
        }
    )
})
app.delete('/del-data', (req, res) => {
    const { pass, id } = req.body

    db.query(
        "DELETE FROM propertyManage WHERE propertyId = ? AND password = ?",
        [id, pass],
        (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).json(err)
            } else {
                res.status(200).json(result)
                if (result.affectedRows === 1) {
                    db.query(
                        "DELETE FROM propertyData WHERE id = ?",
                        [id],
                        (err) => {
                            if (err) {
                                console.log(err);
                                res.status(500).json(err)
                            } else {
                                db.query(
                                    "DELETE FROM propertyImages WHERE propertyId = ?",
                                    [id],
                                    (err) => {
                                        if (err) {
                                            console.log(err);
                                            res.status(500).json(err)
                                        }
                                    }
                                )
                            }
                        }
                    )
                }
            }
        }
    )
})

app.get('/property/:property', (req, res) => {
    const { property } = req.params

    db.query(
        "SELECT * FROM propertyImages WHERE propertyId = ?",
        [property],
        (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).json(err)
            } else {
                res.status(200).json(result)
            }
        }
    )
})


const port = process.env.PORT || 3004;

app.listen(port, () => {
    console.log('Server is running');
});
