import React from 'react'
import { useInView } from 'react-intersection-observer'
import { Link, Element } from 'react-scroll'

import './AddProperty.css'

import news from '../../assets/storyset/news.png'
import camera from '../../assets/storyset/camera.png'
import uploadImg from '../../assets/storyset/upload.png'

import { MdOutlineReportGmailerrorred, MdTipsAndUpdates } from "react-icons/md";
import { FaCircleInfo } from "react-icons/fa6";
import { GrClose } from "react-icons/gr";
import { TiTick } from "react-icons/ti";
import { FaLock } from "react-icons/fa";

import AddPropertyJS from '../../hooks/AddProperty'
const AddProperty = () => {

  const {
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

  } = AddPropertyJS()

  const [ref1, inView1] = useInView()
  const [ref2, inView2] = useInView()
  const [ref3, inView3] = useInView()
  const [ref4, inView4] = useInView()
  const [ref5, inView5] = useInView()
  const [ref6, inView6] = useInView()

  return (
    <div className='AddProperty'>
      {!uploading ? (
        <div className='con'>
          <div className='navBar'>
            <ul>
              <li>
                <Link to='Address' spy={true} smooth={true} offset={-70} duration={500}>
                  <span className={`${inView1 && 'bolt'}`}>Address</span>
                  {validAddress ? <TiTick id='correct'/> : <MdOutlineReportGmailerrorred id='icon'/>}
                </Link>
              </li>
              <li>
                <Link to='KeyData' spy={true} smooth={true} offset={-70} duration={500}>
                  <span className={`${inView2 && 'bolt'}`}>Key Data</span>
                  {validKeyData ? <TiTick id='correct'/> : <MdOutlineReportGmailerrorred id='icon'/>}
                </Link>
              </li>
              <li>
                <Link to='Details' spy={true} smooth={true} offset={-70} duration={500}>
                  <span className={`${inView3 && 'bolt'}`}>Details</span>
                  {validDetails ? <TiTick id='correct'/> : <MdOutlineReportGmailerrorred id='icon'/>}
                </Link>
              </li>
              <li>
                <Link to='Description' spy={true} smooth={true} offset={-70} duration={500}>
                  <span className={`${inView4 && 'bolt'}`}>Description</span>
                  {validDescription ? <TiTick id='correct'/> : <MdOutlineReportGmailerrorred id='icon'/>}
                </Link>
              </li>
              <li>
                <Link to='Photos' spy={true} smooth={true} offset={-70} duration={500}>
                  <span className={`${inView5 && 'bolt'}`}>Photos</span>
                  {validPhotos ? <TiTick id='correct'/> : <MdOutlineReportGmailerrorred id='icon'/>}
                </Link>
              </li>
              <li>
                <Link to='Contact' spy={true} smooth={true} offset={-70} duration={500}>
                  <span className={`${inView6 && 'bolt'}`}>Contact data</span>
                  {validContact ? <TiTick id='correct'/> : <MdOutlineReportGmailerrorred id='icon'/>}
                </Link>
              </li>
            </ul>
          </div>
          <div className='info'>
            <div className='address' ref={ref1}>
              <Element name='Address'></Element>
              <div className='header'>
                <h2>Address</h2>
                <p><FaCircleInfo id='icon'/>Start with the location of the apartment and the four most important data and facts.</p>
              </div>
              <div className='street'>
                {inputs.slice(0, 2).map((info, index) => (
                  <div className='input' key={index}>
                    <input 
                      id={info.field}
                      type="text"
                      placeholder=''
                      value={info.value}
                      onChange={(e) => handleChangeValue(info.field, e, info.maxSymbols)}
                    />
                    <label htmlFor={info.field}>{info.label}</label>
                    {showErrors[info.field] && <p>Please enter a value.</p>}
                  </div>
                ))}
              </div>
              <div className='location'>
                {inputs.slice(2, 4).map((info, index) => (
                  <div className='input' key={index}>
                    <input 
                      id={info.field}
                      type="text"
                      placeholder=''
                      value={info.value}
                      onChange={(e) => handleChangeValue(info.field, e, info.maxSymbols)}
                    />
                    <label htmlFor={info.field}>{info.label}</label>
                    {showErrors[info.field] && <p>Please enter a value.</p>}
                  </div>
                ))}
              </div>
            </div>
            <div className='keyData' ref={ref2}>
              <Element name='KeyData'></Element>
              <div className='header'>
                <h2>Key Data</h2>
                <p><FaCircleInfo id='icon'/>Identify crucial information at a glance. Key data encapsulates vital details that define the essence of the subject. This includes fundamental facts such as dates, numbers, and core statistics. It serves as a quick reference point for anyone seeking a comprehensive overview.</p>
              </div>
              <div className='inputs'>
                {inputs.slice(4, 8).map((info, index) => (
                  <div className='input' key={index}>
                    <input 
                      id={info.field}
                      type="text"
                      placeholder='' 
                      value={info.value}
                      onChange={(e) => handleChangeValue(info.field, e, info.maxSymbols)}
                    />
                    <label htmlFor="livingArea">{info.label}</label>
                    {info.add ? (
                      <>
                        <button onClick={() => handleChangeNumber(info.field, info.remove)}>-</button>
                        <button onClick={() => handleChangeNumber(info.field, info.add)}>+</button>
                      </>
                    ) : (
                      <>
                        {showErrors[info.field] && <p>Please enter a value.</p>}
                        <span>{info.span}</span>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className='details' ref={ref3}>
              <Element name='Details'></Element>
              <div className='header'>
                <h2>Details</h2>
                <p><FaCircleInfo id='icon'/>Delve into the specifics and nuances that shape the subject. Details offer a deeper understanding, covering intricacies, features, and finer points that contribute to the overall context. Whether it's dimensions, specifications, or noteworthy elements, this section provides a comprehensive exploration.</p>
              </div>
              <div className='facilities'>
                {inputs[8].buttons.map((info, index) => (
                  <button className={`${inputs[8].value === info && 'correct'}`} onClick={() => handleChangleFacilities(info)} key={index}>{info}</button>
                ))}
              </div>
              <div className='inputs'>
                {inputs.slice(9, 15).map((info, index) => (
                  <div className='input' key={index}>
                    <input 
                      id={info.field}
                      type="text"
                      placeholder=''
                      value={info.value}
                      onChange={(e) => handleChangeValue(info.field, e, info.maxSymbols)}
                    />
                    <label htmlFor="houseType">{info.label}</label>
                    {info.options &&
                      <select name="" id={info.select} value={info.value} onChange={(e) => handleChangeValue(info.field, e, info.maxSymbols)}>
                        {info.options.map((option, optionIndex) => (
                          <option value={option} key={optionIndex}>{option}</option>
                        ))}
                      </select>
                    }
                    {info.add &&
                      <>
                        <button onClick={() => handleChangeNumber(info.field, info.remove)}>-</button>
                        <button onClick={() => handleChangeNumber(info.field, info.add)}>+</button>
                      </>
                    }
                    {(!info.add && !info.options) &&
                      showErrors[info.field] && <p>Please enter a value.</p>
                    }
                  </div>
                ))}
              </div>
            </div>
            <div className='description' ref={ref4}>
              <Element name='Description'></Element>
              <div className='header'>
                <h2>Description</h2>
                <p><FaCircleInfo id='icon'/>Unveil the character and unique qualities through a vivid narrative. The description provides a narrative that goes beyond mere facts, offering insights into the personality or distinctive attributes. Capture the essence, atmosphere, and distinctive traits that set the subject apart.</p>
              </div>
              {inputs.slice(15, 20).map((info, index) => (
                <div className='input' key={index}>
                  {index === 0 ? (
                    <input 
                      id={info.field}
                      type="text"
                      placeholder=''
                      value={info.value}
                      onChange={(e) => handleChangeValue(info.field, e, info.maxSymbols)}
                    />
                  ) : (
                    <>
                      <textarea name="" id={info.field} cols="30" rows="10" value={info.value} onChange={(e) => handleChangeValue(info.field, e, info.maxSymbols)} placeholder={info.placeholder}></textarea>
                      <p>{info.maxSymbols - info.value.length} characters left</p>
                    </>
                  )}
                  <label htmlFor={info.field}>{info.label}</label>
                  {(index === 0 && showErrors[info.field]) && <p>Please enter a value.</p>}
                </div>
              ))}
            </div>
            <div className='images' ref={ref5}>
              <Element name='Photos'></Element>
              <div className='header'>
                <h2>Images And Documents</h2>
                <p><FaCircleInfo id='icon'/>In this way, the property can be presented in the best light: meaningful photos evoke emotions and interested parties stay longer with the offer. – Images, floor plans and documents can be uploaded with just a few clicks.</p>
              </div>
              <div className='input'>
                <input type="file" onChange={handleAddImage} id="fileInputUniqueId" accept='image/*' multiple />
                <img src={camera} alt="" />
              </div>
              <div className='userImages-con'>
                {URL_Images.map((image, index) => (
                  <div className='img' key={index}>
                    <img src={image} alt=""/>
                    <button onClick={() => handleRemoveImage(index)}><GrClose /></button>
                  </div>
                ))}
              </div>
            </div>
            <div className='contact' ref={ref6}>
              <Element name='Contact'></Element>
              <div className='header'>
                <h2>Contact</h2>
                <p><FaCircleInfo id='icon'/>Establish a connection point for communication and inquiries. The contact section furnishes essential information for reaching out, including contact numbers, email addresses, and any other relevant details. It serves as a gateway for further engagement, ensuring accessibility and facilitating seamless interaction.</p>
              </div>
              <div className='inputs'>
                {inputs.slice(20, 24).map((info, index) => (
                  <div className='input' key={index}>
                  <input 
                    id={info.field}
                    type="text"
                    placeholder='' 
                    value={info.value}
                    onChange={(e) => handleChangeValue(info.field, e, info.maxSymbols)}
                    autoComplete='false'
                  />
                    <label htmlFor={info.field}>{info.label}</label>
                    {index !== 2 &&
                      showErrors[info.field] && <p>Please enter a value.</p>
                    }
                  </div>
                ))}
              </div>
            </div>
            <div className='mobile-tips'>
              <h2><MdTipsAndUpdates id='tip'/>Tips</h2> 
              <p>Once you set property you can't change anything on information!</p>
              <p>You can post property and after delete it with useing your password and ID of property!</p>
              <p>Information can be NOT true if you want to test functionality!</p>
              <div className='input'>
                <input
                  id='managePassMobile' 
                  type="text"
                  value={formData.Password}
                  onChange={(e) => handleChangeValue('Password', e, 5)}
                />
                <label htmlFor="managePassMobile">Manage Password</label>
              </div>
            </div>
            <div className='btn'>
              <Link to='Address' spy={true} smooth={true} offset={-70} duration={500}>
                <button>Preview</button>
              </Link>
              <button onClick={handleCheckUpload}>Save and Continue</button>
            </div>
          </div>
          <div className='tips'>
            <div className='manage'>
              <h2><MdTipsAndUpdates id='tip'/>Tips</h2>
              <p>Once you set property you can't change anything on information!</p>
              <p>You can post property and after delete it with useing your password and ID of property!</p>
              <p>Information can be NOT true if you want to test functionality!</p>
              <div className='input'>
                <input
                  id='managePass' 
                  type="text"
                  value={formData.Password}
                  onChange={(e) => handleChangeValue('Password', e, 5)}
                />
                <label htmlFor="managePass">Manage Password</label>
                <strong>Password need to be 5 Symbols</strong>
                <FaLock id='lock'/>
              </div>
                {uncorrectPassword && <span>Password is Required!</span>}
            </div>
          </div>
        </div>
      ) : (
        !finishedAdding ? (
        <div className='loading'>
          <img src={uploadImg} alt="" />
          <div className={`line ${newProperty ? 'half' : newImages && 'total'}`}>
            <div className='circles-con'>
              <div className='circle'>1</div>
              <div className='circle'>2</div>
              <div className='circle'>3</div>
            </div>
          </div>
        </div>
        ) : (
          <div className='newProperty'>
            <h2>Your Property Has been successfully uploaded.</h2>
            <div className='infoProperty'>
              <div className='input'>
                <input id='propPass' type="text" value={formData.Password} readOnly/>
                <label htmlFor="propPass">Your Password</label>
              </div>
              <div className='input'>
                <input id='propId' type="text" value={propId} readOnly />
                <label htmlFor="propId">Your Property Id</label>
              </div>
            </div>
            <div className='navigate'>
              <button onClick={handleHome}>Go Back</button>
              <button onClick={(handleProperty)}>See Property</button>
            </div>
            <img src={news} alt="" />
          </div>
        )
      )}
    </div>
  )
}

export default AddProperty
