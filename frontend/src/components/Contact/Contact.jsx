import React, { useEffect, useState } from 'react'
import './Contact.css'

import contact from '../../assets/team/contact.jpg'

import ContactJS from '../../hooks/Contact'

import GlobalContact from '../globalContact/globalContact.jsx'
import { RiArrowDownSLine } from 'react-icons/ri'


const Contact = () => {

  const {
    faq,
    contacts,

    ref4,
    inView4,
  } = ContactJS()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  const [openFaq, setOpenFaq] = useState({})

  const handleOpen = (index) => {
    setOpenFaq((prev) => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  return (
    <div className='Contact'>

      <div className='main'>
        <img src={contact} alt="" />
      </div>

      <div className='header' ref={ref4}>
        <h1>Click here to find the contact <strong>person.<div className={`marker ${inView4 && 'show'}`}></div></strong></h1>
        <p>No matter what stage of the home journey you may be in, we’re here to empower you by making all things home simple, efficient, and enjoyable.</p>
      </div>

      <div className='contacts'>
        {contacts.map((info, index) => (
          <div className='con' key={index} ref={info.ref}>
            <div className='fix'>
              <div className={`img ${info.view && 'show'}`}>
                <img src={info.img} alt="" />
              </div>
              <div className='info'>
                {index === 0 && <h2><strong>Customer<div className={`marker ${info.view && 'show'}`}></div></strong> contact</h2>}
                {index === 1 && <h2>Contact with the <strong>media<div className={`marker ${info.view && 'show'}`}></div></strong></h2>}
                {index === 2 && <h2>Us on social <strong>media<div className={`marker ${info.view && 'show'}`}></div></strong></h2>}
                <p>{info.p}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className='faq'>
        {faq.map((info, index) => (
          <div className='line' key={index}>
            <div className='question' onClick={() => handleOpen(index)}>
              <h3 className={`${openFaq[index] && 'active'}`}>{info.h3}</h3>
              <RiArrowDownSLine className={`arrow ${openFaq[index] && 'rotate'}`}/>
            </div>
            <div className={`answer ${openFaq[index] && 'show'}`}>
              <p dangerouslySetInnerHTML={{ __html: info.p}}></p>
            </div>
          </div>
        ))}
      </div>

      <GlobalContact />
      
    </div>
  )
}

export default Contact
