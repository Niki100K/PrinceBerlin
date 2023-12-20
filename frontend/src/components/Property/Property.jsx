import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import './Property.css'
import 'swiper/css';
import 'swiper/css/pagination';

import for_sell from '../../assets/storyset/for_sell.png'

import { FaLocationArrow } from "react-icons/fa";
import { FaCodeBranch } from "react-icons/fa6";
import { GiStreetLight } from "react-icons/gi";
import { MdNumbers } from "react-icons/md";

import GlobalContact from '../globalContact/globalContact';
import { ActiveStatus } from '../../ActiveStatus'
import PropertyJS from '../../hooks/Property'
const Property = () => {

    const {homesData} = useContext(ActiveStatus)

    const {
        propertyData,
        propertyId,
        handleAddProperty,
        propertyImages,
        imagesSlice,
        infoProperty,
        setOpenOptions,
        openOptions,
        swiperView,
        deleteFormData,
        handleChangeData,
        deleteData,
        wrongData,
    } = PropertyJS()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


  return (
    <div className='Property'>
        <div className='con'>
            <div className='property'>
                <Link to='images' target='__blank' className='images'>
                    <div className='main'>
                        <img src={propertyData.image} alt="" />
                    </div>
                    <div className='child'>
                        {propertyImages.filter(property => property.image !== propertyData?.image).slice(0, imagesSlice).map((image, index) => (
                            <img src={image.image} alt="" key={index}/>
                        ))}
                    </div>
                </Link>
                <div className='price'>
                    <h2>${propertyData.purchasePrice?.toLocaleString()}</h2>
                    <div className='location'>
                        <strong><FaLocationArrow id='icon'/>{propertyData.location}</strong>
                        <a href={`https://www.google.com/maps/place/${propertyData.street}`} target='__black'><GiStreetLight id='icon'/>{propertyData.street}</a>
                        <strong><MdNumbers id='icon'/>{propertyData.streetNo}</strong>
                        <strong><FaCodeBranch id='icon'/>{propertyData.zipCode}</strong>
                    </div>
                    <div className='rooms'>
                        <strong><span>{propertyData.bedroom}</span> bed</strong>
                        <strong><span>{propertyData.bathroom}</span> bath</strong>
                        <strong><span>{propertyData.areaProperty}</span> m2</strong>
                    </div>
                </div>
                <div className='all-info'>
                    {infoProperty.map((info, index) => (
                        <div className='line' key={index}>
                            <div className='icon'>
                                <info.icon />
                            </div>
                            <div className='text'>
                                <p>{info.p}</p>
                                <span>{info.span}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='description'>
                    <div className='header'>
                        <h2>{propertyData.title}</h2>
                    </div>
                    {propertyData.objectDescription?.length > 0 &&
                        <div className='part'>
                            <h3>Description</h3>
                            <p>{propertyData.objectDescription}</p>
                        </div>
                    }
                    {propertyData.furniture?.length > 0 &&
                        <div className='part'>
                            <h3>Furniture</h3>
                            <p>{propertyData.furniture}</p>
                        </div>
                    }
                    {propertyData.position?.length > 0 &&
                        <div className='part'>
                            <h3>Position</h3>
                            <p>{propertyData.position}</p>
                        </div>
                    }
                    {propertyData.various?.length > 0 &&
                        <div className='part'>
                            <h3>Position</h3>
                            <p>{propertyData.various}</p>
                        </div>
                    }
                </div>
            </div>
            <div className='card'>
                <div className='contact'>
                    <h2>More about this property</h2>
                    <div className='input'>
                        <input id='fullName' type="text" placeholder=''/>
                        <label htmlFor="fullName">Full Name*</label>
                    </div>
                    <div className='input'>
                        <input id='contactEmail' type="email" placeholder=''/>
                        <label htmlFor="contactEmail">Email*</label>
                    </div>
                    <div className='input'>
                        <input id='contactPhone' type="tel" placeholder=''/>
                        <label htmlFor="contactPhone">Phone*</label>
                    </div>
                    <div className='btn'>
                        <button>Contact</button>
                        <button onClick={() => setOpenOptions(!openOptions)}>Remove</button>
                    </div>
                    {openOptions &&
                    <div className='options'>
                        <div className='inputs'>
                            <div className='inputOption'>
                                <input 
                                    id='propertyId'
                                    type="text"
                                    value={deleteFormData.propertyId}
                                    onChange={(e) => handleChangeData('propertyId', e, 5)}
                                    placeholder='Id' 
                                />
                                <label htmlFor="propertyId">{wrongData && 'Wrong Id'}</label>
                            </div>
                            <div className='inputOption'>
                                <input 
                                    id='propertyPassword'
                                    type="text" 
                                    value={(deleteFormData.propertyPassword)}
                                    onChange={(e) => handleChangeData('propertyPassword', e, 5)}
                                    placeholder='Password'
                                />
                                <label htmlFor="propertyPassword">{wrongData && 'Password'}</label>
                            </div>
                        </div>
                        <button onClick={deleteData}>Delete</button>
                    </div>
                    }
                </div>
            </div>
        </div>
        <div className='swipers'>
            <div className='swiper-con'>
                <h2>Recommended</h2>
                <Swiper
                spaceBetween={25}
                loop
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                slidesPerView={swiperView}
                modules={[Pagination, Autoplay]}
                >
                    {homesData.filter(checkId => checkId.id !== propertyId).map((info, index) => (
                        <SwiperSlide key={index}>
                            <Link to={`/Homes/property/${info.id}`} className='image-con'>
                                <img src={info.image} alt=""/>
                                <p>${info.purchasePrice.toLocaleString()}</p>
                                <div className='line'>
                                    <strong><span>{propertyData.bedroom}</span> bed</strong>
                                    <strong><span>{propertyData.bathroom}</span> bath</strong>
                                    <strong><span>{propertyData.areaProperty}</span> m2</strong>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
        <div className='sellProperty'>
            <div className='text'>
                <h2>Have property for sell?</h2>
                <p>Sell your property quickly and easily in 6 simple steps:</p>
                <ol>
                    <li>Complete the  property details form.</li>
                    <li>Add high-quality images and documents.</li>
                    <li>Procide key information about your property.</li>
                    <li>Highlight special details and features.</li>
                    <li>Upload additional photos and documents.</li>
                    <li>Review and submit your property listing.</li>
                </ol>
                <button onClick={handleAddProperty}>Get Started</button>
            </div>
            <div className='img'>
                <img src={for_sell} alt="" />
            </div>
        </div>
        <GlobalContact />
    </div>
  )
}

export default Property
