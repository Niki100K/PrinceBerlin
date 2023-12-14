import React, { useState, useEffect } from 'react'
import './Sell.css'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import sell from '../../assets/sell.jpg'
import sell_storyset from '../../assets/storyset/sell.png'
import traditionally_storyset from '../../assets/storyset/traditionally.png'
import yourself_storyset from '../../assets/storyset/yourself.png'

import { AiOutlineCheck } from 'react-icons/ai'
import { RiArrowDownSLine } from 'react-icons/ri'

import GlobalContact from '../globalContact/globalContact';

const Sell = () => {

  const [ref1, inView1] = useInView()


  const faq = [
    {
      question: 'When selling my house, where should I begin?',
      answer: 'Start your home selling process by gathering information and considering your options. After choosing a selling path that works best for you, take the first step; contact an iBuyer, a real estate agent or begin home prep.',
    },
    {
      question: 'How long does it take to sell a house?',
      answer: 'On average, homes in the U.S. spend about one month on the market before going under contract, and another month or more to close. In 2020, the average time to sell a home was 55-70 days from list to close.',
    },
    {
      question: 'What home seller mistakes should I avoid?',
      answer: 'Common mistakes when selling a house include overpricing, poor sale timing, incomplete home repairs, unprofessional marketing photography and forgetting to factor in all of the closing costs as a seller. Learn more about your likely home sale net proceeds.',
    },
    {
      question: 'Where are personalized selling options available?',
      span: 'Today, you can sell with a Zillow partner agent or get a cash offer in the following markets:',
      places: [
        {
          location: 'Midwest',
          information: 'Detroit, MI; Indianapolis, IN; Kansas City, MO; Minneapolis-St. Paul, MN; Saint Louis, MO',
        },
        {
          location: 'Northeast',
          information: 'Boston, MA; Long Island and sections of the Lower Hudson Valley, NY; North and Central New Jersey, NJ; Washington, DC',
        },
        {
          location: 'Southeast',
          information: 'Atlanta, GA; Charlotte, NC; Cincinnati, OH; Cleveland, OH; Columbia, SC; Columbus, OH; Daytona Beach, FL; Durham, NC; Fort Myers, FL; Gainesville, FL; Greenville, SC; Jacksonville, FL; Knoxville-Morristown, TN; Lakeland, FL; Miami, FL; Naples, FL; Nashville, TN; Orlando, FL; Raleigh, NC; Sarasota, FL; Tampa, FL.',
        },
        {
          location: 'Southwest',
          information: 'Albuquerque, NM; Austin, TX; Dallas-Fort Worth, TX; Houston, TX; Killeen, TX; Las Vegas, NV; Oklahoma, OK; Phoenix, AZ; San Antonio, TX; Tucson, AZ',
        },
        {
          location: 'West',
          information: 'Boulder, CO; Colorado Springs, CO; Denver, CO; Fort Collins, CO; Portland, OR; Salt Lake City, UT',
        },
      ]
    },
  ]

  const [checkedItems, setCheckedItems] = useState({});

  const handleCheckboxChange = (index) => {
    setCheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [index]: !prevCheckedItems[index],
    }));
  };


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <div className='Sell'>

      <div className='main' ref={ref1}>
        <img src={sell} alt="" />
        <div className='header'>
          <h1><strong>Sell your<div className={`marker ${inView1 && 'show'}`}></div></strong> home with confidence</h1>
        </div>
      </div>

      <div className='sell-info-con'>
        <div className='con'>
          <div className='info'>
            <h2>Sell with a partner agent or take a cash offer</h2>
            <p>Prince IV Berlin helps you sell your home your way. Easily explore your selling options below and get personalized market value estimates — we can even help you choose the best option when you're ready.</p>
            <p>This experience is currently available in 45 markets in <strong> Arizona, Colorado, Florida, Georgia, Indiana, Kansas, Massachusetts, Michigan, Minnesota, Missouri, Nevada, New Jersey, New Mexico, New York, North Carolina, Ohio, Oklahoma, Oregon, South Carolina, Tennessee, Texas, Utah and Washington.</strong></p>
          </div>
          <div className='img'>
            <img src={sell_storyset} alt="" />
          </div>
        </div>
        <div className='mobile-con-p'>
          <p>Prince IV Berlin helps you sell your home your way. Easily explore your selling options below and get personalized market value estimates — we can even help you choose the best option when you're ready.</p>
          <p>This experience is currently available in 45 markets in Arizona, Colorado, Florida, Georgia, Indiana, Kansas, Massachusetts, Michigan, Minnesota, Missouri, Nevada, New Jersey, New Mexico, New York, North Carolina, Ohio, Oklahoma, Oregon, South Carolina, Tennessee, Texas, Utah and Washington. Click here to see if it's available in your city.</p>
        </div>
      </div>
      
      <div className='traditionally-con'>
        <div className='con'>
          <div className='info'>
            <h2>Sold traditionally with an agent</h2>
            <p>Not in the market for the new Prince IV Berlin selling experience? Work with a real estate agent for sales support every step of the way, including preparing, listing and marketing your home.</p>
          </div>
          <div className='img'>
            <img src={traditionally_storyset} alt="" />
          </div>
        </div>
        <div className='why-and-how'>
          <div className='why'>
            <h3>Why sell traditional</h3>
            <p><AiOutlineCheck id='check'/>Potential for bidding wars</p>
            <p><AiOutlineCheck id='check'/>Access to local market expertise</p>
            <p><AiOutlineCheck id='check'/>Get help negotiating and reviewing offers</p>
            <p><AiOutlineCheck id='check'/>Navigate a stressful process with dedicated guidance</p>
          </div>
          <div className='how'>
            <h3>How to sell traditionally</h3>
            <p>Learn more about the process of selling your house with a listing agent. If this is the best way for you, interview agents and choose a professional who will meet your expectations. Your agent will then guide you through the steps to sell your home.</p>
          </div>
        </div>
      </div>

      <div className='sell-yourself-con'>
        <div className='con'>
          <div className='info'>
            <h2>Sell your home yourself</h2>
            <p>Deciding to sell your home yourself is called a sale by owner (FSBO). The FSBO process is similar to a traditional sale, but without the help of a real estate agent. In this case, you are responsible for home preparation, marketing, showings and negotiations.</p>
            <Link to='/add-property'>
              <button>Publish Your Home</button>
            </Link>
          </div>
          <div className='img'>
            <img src={yourself_storyset} alt="" />
          </div>
        </div>
        <div className='FSBO-and-how'>
          <div className='FSBO'>
            <h3>Why Sell FSBO</h3>
            <p><AiOutlineCheck id='check'/>Avoid paying a listing agent commission</p>
            <p><AiOutlineCheck id='check'/>Advertise your listing for free on Prince IV Berlin</p>
            <p><AiOutlineCheck id='check'/>Flexibility and control from start to finish</p>
          </div>
          <div className='how'>
            <h3>How to sell FSBO</h3>
            <p>When selling yourself, start by preparing your home, staging and hiring a professional photographer. Once your marketing materials are ready, research comparable homes to help price your home. Next, a Prince IV Berlin listing. You will probably host house shows or open houses. Then select an offer, negotiate, accept and close.</p>
          </div>
        </div>
      </div>
      
      <div className='faq'>
      <div className='header'>
        <h2>Frequently Asked Questions</h2>
      </div>
      <div className='lines-con'>
        {faq.map((info, index) => (
          <div className='line' key={index}>
            <input
              type="checkbox"
              id={index}
              checked={checkedItems[index] || false}
              onChange={() => handleCheckboxChange(index)}
            />
            <label htmlFor={index}>
              <div className='question'>
                <h3>{info.question}</h3>
                <RiArrowDownSLine id='arrow'/>
              </div>
            </label>
            <div className={`answer ${checkedItems[index] ? 'visible' : 'hidden'}`}>
              <p>{info.answer}</p>
              <h6>{info.span}</h6>
              {info.places && info.places.map((places, indexPlaces) => (
                <div key={indexPlaces}>
                  <h4>{places.location}</h4>
                  <p>{places.information}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>

      <GlobalContact />

    </div>
  )
}

export default Sell
