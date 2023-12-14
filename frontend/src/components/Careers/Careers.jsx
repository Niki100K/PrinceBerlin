import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Careers.css'

import carrers_img from '../../assets/team/carrers_img.jpg'
import career from '../../assets/storyset/career.png'

import GlobalContact from '../globalContact/globalContact.jsx'
import CareersJS from '../../hooks/Careers.js'
const Careers = () => {

  const {
    ref1,
    ref3,

    discover,

    inView1,
    inView3,
  } = CareersJS()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div className='Creers'>

      
      <div className='main-img'>
        <img src={carrers_img} alt="" />
      </div>

      <div className='success' ref={ref1}>
        <h2>Success happens <strong>together<div className={`marker ${inView1 && 'show'}`}></div></strong></h2>
        <p>We're happy to have you there. We are a data-driven company, act proactively and always treat each other with respect. Our mission is to make complex decisions easy for people. Do you also want to help others through your work? Then become a scout. We'll tell you what makes working with us so special.</p>
      </div>

      <div className='discover'>
        {discover.map((info, index) => (
          <div className='con' key={index} ref={info.ref}>
            <div className='info'>
              <h2>{info.h2}</h2>
              <p>{info.p}</p>
            </div>
            <div className='img'>
              <img src={info.img} className={`${info.View && 'show'}`} alt="" />
            </div>
          </div>
        ))}
      </div>

      <div className='contact' ref={ref3}>
        <div className='con'>
          <img src={career} alt="" />
          <div className='info'>
            <h2>Do you have any questions? Feel free to <strong>contact us!<div className={`marker ${inView3 && 'show'}`}></div></strong></h2>
            <p>Our talent acquisition team will be happy to assist you.</p>
            <Link to='/contact'>
              <button>Contact Us</button>          
            </Link>
          </div>
        </div>
      </div>

      <GlobalContact />
      
    </div>
  )
}

export default Careers
