import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { ActiveStatus } from '../ActiveStatus'
import { useNavigate } from 'react-router-dom'
const AddProperty = () => {

  const {setHomesData, API} = useContext(ActiveStatus)
  const navigate = useNavigate()
  
  const [formData, setFormData] = useState({
    street: '',
    streetNumber: '',
    zipCode: '',
    location: '',
    rooms: 0,
    livingArea: '',
    areaProperty: '',
    purchasePrice: '',
    Facilities: '',
    houseType: '',
    floorsNumber: '',
    bathroomsNumber: 0,
    bedroomsNumber: 0,
    usableArea: '',
    constructionPhase: '',
    title: '',
    objectDescription: '',
    furniture: '',
    position: '',
    various: '',
    firstName: '',
    lastName: '',
    telephone: '',
    email: '',
    Password: '',
  })

  const handleChangeValue = (field, e, maxSymbols) => {
    let value = e.target.value

    if (field === 'rooms' || field === 'livingArea' || field === 'areaProperty' || field === 'purchasePrice' || field === 'floorsNumber' || field === 'bathroomsNumber' || field === 'bedroomsNumber' || field === 'telephone') {
      value = value.replace(/\D/g, '');
    }
    
    setFormData(prev => ({
      ...prev,
      [field]: value.length > maxSymbols ? value.slice(0, maxSymbols) : value
    }))
  }

  const handleChangeNumber = (field, task) => {
    if (formData[field] !== '') {
      const numericRooms = parseInt(formData[field], 10);
    
      if (task === 'remove') {
        if (numericRooms > 0) {
          setFormData(prev => ({
            ...prev,
            [field]: numericRooms - 1
          }));
        }
      } else if (task === 'add') {
        setFormData(prev => ({
          ...prev,
          [field]: numericRooms + 1
        }));
      }
    } else {
      if (task === 'remove') {
        if (formData[field] > 0) {
          setFormData(prev => ({
            ...prev,
            [field]: prev[field] - 1
          }));
        }
      } else if (task === 'add') {
        setFormData(prev => ({
          ...prev,
          [field]: prev[field] + 1
        }));
      }
    }
  };
  const handleChangleFacilities = (value) => {
    if (formData.Facilities === value) {
      setFormData(prev => ({
        ...prev,
        Facilities: '',
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        Facilities: value
      }))
    }
  }

  const [API_Images, setAPI_Images] = useState([])
  const [URL_Images, setURL_Images] = useState([])

  const handleAddImage = (e) => {
    const files = e.target.files;
    
    const newImages = Array.from(files).map(file => URL.createObjectURL(file));
    setAPI_Images(prevImagesData => [...prevImagesData, ...files]);
    setURL_Images((prevImages) => [...prevImages, ...newImages]);
  }

  const handleRemoveImage = (index) => {
    const updatedImages = [...URL_Images];
    updatedImages.splice(index, 1);
    setURL_Images(updatedImages);
  
    const updatedImagesDataAPI = [...API_Images];
    updatedImagesDataAPI.splice(index, 1)
    setAPI_Images(updatedImagesDataAPI);
  }

  const inputs = [
    {
      field: 'street',
      value: formData.street,
      maxSymbols: 50,
      label: 'Street*',
    },
    {
      field: 'streetNumber',
      value: formData.streetNumber,
      maxSymbols: 10,
      label: 'No.*',
    },
    {
      field: 'zipCode',
      value: formData.zipCode,
      maxSymbols: 6,
      label: 'Zip Code*',
    },
    {
      field: 'location',
      value: formData.location,
      maxSymbols: 30,
      label: 'Location*',
    },
    {
      field: 'rooms',
      value: formData.rooms,
      maxSymbols: 4,
      label: 'Rooms *',
      remove: 'remove',
      add: 'add',
    },
    {
      field: 'livingArea',
      value: formData.livingArea,
      maxSymbols: 10,
      label: 'Living Area*',
      span: 'M2',
    },
    {
      field: 'areaProperty',
      value: formData.areaProperty,
      maxSymbols: 10,
      label: 'Property Area*',
      span: 'M2',
    },
    {
      field: 'purchasePrice',
      value: formData.purchasePrice,
      maxSymbols: 10,
      label: 'Purchase Price*',
      span: 'Є',
    },
    {
      value: formData.Facilities,
      buttons: [
        "Symply",
        "Normal",
        "Lifted",
        "Luxury",
      ]
    },
    {
      field: 'houseType',
      value: formData.houseType,
      maxSymbols: 100,
      label: 'House Type',
      select: 'houseTypeSelect',
      options: [
        "Not specified",
        "Single-family",
        "Middle terraced house",
        "Apartment",
        "Holiday bungalows",
        "Farmhouse",
        "Villa",
        "Castle",
        "Special property",
      ]
    },
    {
      field: 'floorsNumber',
      value: formData.floorsNumber,
      maxSymbols: 3,
      label: 'Number Of Floors*',
    },
    {
      field: 'bathroomsNumber',
      value: formData.bathroomsNumber,
      maxSymbols: 4,
      label: 'Number Of Bathrooms*',
      remove: 'remove',
      add: 'add',
    },
    {
      field: 'bedroomsNumber',
      value: formData.bedroomsNumber,
      maxSymbols: 4,
      label: 'Number Of Bedrooms*',
      remove: 'remove',
      add: 'add',
    },
    {
      field: 'usableArea',
      value: formData.usableArea,
      maxSymbols: 10,
      label: 'Usable Area*',
    },
    {
      field: 'constructionPhase',
      value: formData.constructionPhase,
      maxSymbols: 100,
      select: 'constructionPhaseSelect',
      label: 'Construction Phase',
      options: [
        "Indefinite",
        "House in planning",
        "House under construction",
        "House finished",
      ]
    },
    {
      field: 'title',
      value: formData.title,
      maxSymbols: 50,
      label: 'Ad Title*',
    },
    {
      field: 'objectDescription',
      value: formData.objectDescription,
      maxSymbols: 90,
      label: 'Object Description',
      placeholder: "'e.g. B. Old building, corner house, facade with plaster.",
    },
    {
      field: 'furniture',
      value: formData.furniture,
      maxSymbols: 2000,
      label: 'Furniture',
      placeholder: "e.g. For example, oak napket, floor-to-ceiling windows, fireplace, underfloor heating",
    },
    {
      field: 'position',
      value: formData.position,
      maxSymbols: 2000,
      label: 'Position',
      placeholder: "e.g. B. green side street, cozy cafe, playground around the corner",
    },
    {
      field: 'various',
      value: formData.various,
      maxSymbols: 2000,
      label: 'Various',
      placeholder: "e.g. B. For whom the property is suitable, specifics of the contract",
    },
    {
      field: 'firstName',
      value: formData.firstName,
      maxSymbols: 30,
      label: 'First Name*',
    },
    {
      field: 'lastName',
      value: formData.lastName,
      maxSymbols: 30,
      label: 'Last Name*',
    },
    {
      field: 'telephone',
      value: formData.telephone,
      maxSymbols: 12,
      label: 'Telephone',
    },
    {
      field: 'email',
      value: formData.email,
      maxSymbols: 50,
      label: 'Email*',
    },
  ]

  const [validAddress, setValidAddress] = useState(false)
  const [validKeyData, setValidKeyData] = useState(false)
  const [validDetails, setDetails] = useState(false)
  const [validDescription, setDescription] = useState(false)
  const [validPhotos, setValidPhotos] = useState(false)
  const [validContact, setValidContact] = useState(false)
  useEffect(() => {
    let validStreet = formData.street.length > 0 && formData.street.length <= 50 && formData.street !== ''
    let validStreetNumber = formData.streetNumber.length > 0 && formData.streetNumber.length <= 10 && formData.streetNumber !== ''
    let validZipCode = formData.zipCode.length > 0 && formData.zipCode.length <= 6 && formData.zipCode !== ''
    let validLocation = formData.location.length > 0 && formData.location.length <= 30 && formData.location !== ''
    setValidAddress(validStreet && validStreetNumber && validZipCode && validLocation)
  }, [formData.street, formData.streetNumber, formData.zipCode, formData.location])

  useEffect(() => {
    let validStreet = formData.livingArea.length > 0 && formData.livingArea.length <= 10 && formData.livingArea !== ''
    let validAreaProperty = formData.areaProperty.length > 0 && formData.areaProperty.length <= 10 && formData.areaProperty !== ''
    let validPurchasePrice = formData.purchasePrice.length > 0 && formData.purchasePrice.length <= 10 && formData.purchasePrice !== ''
    setValidKeyData(validStreet && validAreaProperty && validPurchasePrice)
  }, [formData.livingArea, formData.areaProperty, formData.purchasePrice])

  useEffect(() => {
    let validFloorsNumber = formData.floorsNumber.length > 0 && formData.floorsNumber.length <= 3 && formData.floorsNumber !== ''
    let validUsableArea = formData.usableArea.length > 0 && formData.usableArea.length <= 10 && formData.usableArea !== ''
    setDetails(validFloorsNumber && validUsableArea)
  }, [formData.floorsNumber, formData.usableArea])

  useEffect(() => {
    let validTitle = formData.title.length > 0 && formData.title.length <= 50 && formData.title !== ''
    setDescription(validTitle)
  }, [formData.title])

  useEffect(() => {
    setValidPhotos(URL_Images.length >= 3)
  }, [URL_Images.length])

  useEffect(() => {
    let validFirstName = formData.firstName.length > 0 && formData.firstName.length <= 30 && formData.firstName !== ''
    let validLastName = formData.lastName.length > 0 && formData.lastName.length <= 30 && formData.lastName !== ''
    let validEmail = formData.email.length > 0 && formData.email.length <= 50 && formData.email !== ''
    setValidContact(validFirstName && validLastName && validEmail)
  }, [formData.firstName, formData.lastName, formData.email])

  const [showErrors, setShowErrors] = useState({
    street: false,
    streetNumber: false,
    zipCode: false,
    location: false,
    livingArea: false,
    areaProperty: false,
    purchasePrice: false,
    floorsNumber: false,
    usableArea: false,
    title: false,
    firstName: false,
    lastName: false,
    email: false,
  })

  const [uncorrectPassword, setUncorrectPassword] = useState(false)
  const handleCheckUpload = () => {
    if (validAddress && validKeyData && validDetails && validDescription && validPhotos && validContact) {
      if (formData.Password.length === 5) {
        upload()
      } else {
        setUncorrectPassword(true)
      }
    } else {
      inputs.forEach(info => {
        let Value = info.value
        if (Value === "" || 0) {
          setShowErrors(prev => ({
            ...prev,
            [info.field]: true
          }))
        } else {
          setShowErrors(prev => ({
            ...prev,
            [info.field]: false
          }))
        }
      });
    }
  }

  const [uploading, setUploading] = useState(false)

  const [newProperty, setNewProperty] = useState(false)
  const [newImages, setNewImages] = useState(false)
  
  const [finishedAdding, setFinishedAdding] = useState(false)


  const [propId, setPropId] = useState(0)

  const upload = async () => {
    setUploading(true)
    try {
        const propertyResponse = await axios.post(`${API}/uploadData`, formData)
        const uploadImage = API_Images.map(image => {
          const formData = new FormData()
          formData.append('image', image)
          return axios.post(`${API}/uploadAwsImages`, formData)
        })
        const uploadImageResult = await Promise.all(uploadImage);
        if (propertyResponse) {
          setNewProperty(true)
          let propertyId = propertyResponse.data.insertId
          setPropId(propertyId)
          if (uploadImageResult) {
            const [res1, res2] = await Promise.all([
              await axios.post(`${API}/uploadDataImages`, {
                id: propertyId,
                images: uploadImageResult
              }),
              await axios.post(`${API}/firstImage`, {
                id: propertyId,
                image: uploadImageResult[0].data
              })
            ])
            if (res1 && res2) {
              setNewImages(true)
              const respose = await axios.get(`${API}/allhomes`)
              setHomesData(respose.data)
              setFinishedAdding(true)

            }
          }
        }
      } catch (err) {
      console.error(err);
    }
  }

  const handleHome = () => {
    navigate('/')
  }
  const handleProperty = () => {
    navigate(`/:link/property/${propId}`)
  }
  return {
    propId,
    inputs,
    formData,
    uploading,
    URL_Images,
    finishedAdding,

    validDescription,
    validAddress,
    validKeyData,
    validDetails,
    validContact,
    validPhotos,
    
    handleChangleFacilities,
    handleChangeNumber,
    handleRemoveImage,
    handleCheckUpload,
    handleChangeValue,
    handleProperty,
    handleAddImage,
    handleHome,

    showErrors,
    uncorrectPassword,

    newProperty,
    newImages,
  }
}

export default AddProperty
