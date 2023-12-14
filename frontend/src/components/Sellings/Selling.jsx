import React from 'react'
import './Selling.css'
import { Link } from 'react-router-dom'

import GlobalContact from '../globalContact/globalContact';

import SellingJS from '../../hooks/Selling'

const Selling = () => {

  const { cards } = SellingJS()

  return (
    <div className='Selling'>
      <div className='header'>
        <h2>{cards.length} Articles</h2>
        <strong>Selling</strong>
        <p>Advice and guidance for all aspects of selling your home</p>
      </div>
      <div className='con'>
        <div className='cards'>
          {cards.map((info, index) => (
            <Link to={info.link} className='card' key={index}>
              <div className='img'>
                <img src={info.img} alt="" />
              </div>
              <div className='text'>
                <span>{info.span}</span>
                <p>{info.p}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className='title-info'>
          <div className='info'>
            <h2>Ready for a new address?</h2>
            <p>Get an instant cash offer or list with a local partner agent.</p>
            <Link to="/sell">
              <button>Explore selling options</button>
            </Link>
          </div>
        </div>
      </div>
      <GlobalContact />
    </div>
  )
}

export default Selling
