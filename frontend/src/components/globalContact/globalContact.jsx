import React from 'react'
import { Link } from 'react-router-dom'
import './globalContact.css'

import globalContactJS from '../../hooks/globalContact'

const globalContact = () => {

    const { contact_info } = globalContactJS()

  return (
    <div className="contact-info">
        <div className='social-con'>
            <div className='fix'>
                <div className='con'>
                <div className='icons'>
                    {contact_info.social_links.map((info, index) => (
                    <a key={index} href={info.link} target='_blank' rel='noopener noreferrer'><info.icon id='icon'/></a>
                    ))}
                </div>
                <div className='links'>
                    {contact_info.web_links.map((info, index) => (
                    <Link to={info.link} key={index}><p>{info.p}</p></Link>
                    ))}
                </div>
                <div className='contact'>
                    <h2>Contact Us:</h2>
                    <p>For inquiries, contact us:</p>
                    <p><strong>Phone:</strong> +1 (123) 456-7890</p>
                    <p><strong>Email:</strong> info@realestatename.com</p>
                    <p><strong>Address:</strong> 123 Main Street, City, Country</p>
                </div>
                </div>
                <div className='img'>
                <img src={contact_info.img1} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default globalContact
