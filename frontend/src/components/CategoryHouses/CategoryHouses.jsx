import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CategoryHouses.css';

import { IoIosArrowDown } from "react-icons/io";
import CategoryHousesJS from '../../hooks/CategoryHouses.js';
import GlobalContact from '../globalContact/globalContact.jsx'
import Search from '../../assets/storyset/Search.png'
const CategoryHouses = () => {


    const {
      cardWidth,
      handleShowMorePropery,
      propertyShows,

      settingsData,
      handleChangeValue,
      handleRange,
      handleOpen,
      handleRooms,
      homesByOptions,
      handleMobileSettings,
      mobileSettings,
    } = CategoryHousesJS()


  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [])
  

  return (
    <>
        <div className={`SettingsHome ${mobileSettings ? 'show' : ''}`}>
      <div className='close-btn'>
        <div className='text' onClick={handleMobileSettings}>
          <IoIosArrowDown className='icon'/>
          <p>Filter</p>
        </div>
      </div>
      <div className='box'>
        <div className='header'>
          <h2>Sort By Price</h2>
        </div>
        <div className='split'>
          <div className='input'>
            <input 
              id='minPrice'
              type="text" 
              placeholder='No Min'
              value={settingsData.minPrice}
              onChange={(e) => handleChangeValue('minPrice', e.target.value, 15)}
            />
            <label htmlFor="minPrice"></label>
          </div>
          <div className='input'>
            <input 
              id='maxPrice'
              type="text" 
              placeholder='No Max'
              value={settingsData.maxPrice}
              onChange={(e) => handleChangeValue('maxPrice', e.target.value, 15)}
            />
            <label htmlFor="maxPrice"></label>
          </div>
        </div>
        <div className='btn'>
          <button className={`${settingsData.priceRange === 1 && 'active'}`} onClick={() => handleRange('priceRange', 1)}>Low-High</button>
          <button className={`${settingsData.priceRange === 2 && 'active'}`} onClick={() => handleRange('priceRange', 2)}>High-Low</button>
        </div>
      </div>
      <div className='box'>
        <div className='header'>
          <h2>Sort By m2</h2>
        </div>
        <div className='split'>
          <div className='input'>
            <input 
              id='minM2'
              type="text" 
              placeholder='No Min'
              value={settingsData.minArea}
              onChange={(e) => handleChangeValue('minArea', e.target.value, 15)}
            />
            <label htmlFor="minM2"></label>
          </div>
          <div className='input'>
            <input 
              id='maxM2'
              type="text" 
              placeholder='No Max'
              value={settingsData.maxArea}
              onChange={(e) => handleChangeValue('maxArea', e.target.value, 15)}
            />
            <label htmlFor="maxM2"></label>
          </div>
        </div>
        <div className='btn'>
          <button className={`${settingsData.areaRange === 1 && 'active'}`} onClick={() => handleRange('areaRange', 1)}>Low-High</button>
          <button className={`${settingsData.areaRange === 2 && 'active'}`} onClick={() => handleRange('areaRange', 2)}>High-Low</button>
        </div>
      </div>
      <div className='box'>
        <div className='header'>
          <h2>Bedrooms</h2>
        </div>
        <div className='split'>
          <div className='input'>
            <button className={`${settingsData.bedrooms === 0 && 'active'}`} onClick={() => handleRooms('bedrooms', 0)}>Rooms 0</button>
            <button className={`${settingsData.bedrooms === 2 && 'active'}`} onClick={() => handleRooms('bedrooms', 2)}>Rooms 2</button>
            <button className={`${settingsData.bedrooms === 4 && 'active'}`} onClick={() => handleRooms('bedrooms', 4)}>Rooms 4</button>
          </div>
          <div className='input'>
            <button className={`${settingsData.bedrooms === 1 && 'active'}`} onClick={() => handleRooms('bedrooms', 1)}>Rooms 1</button>
            <button className={`${settingsData.bedrooms === 3 && 'active'}`} onClick={() => handleRooms('bedrooms', 3)}>Rooms 3</button>
            <button className={`${settingsData.bedrooms === 5 && 'active'}`} onClick={() => handleRooms('bedrooms', 5)}>Rooms 5+</button>
          </div>
        </div>
        <div className='btn'>
          <button className={`${settingsData.bedroomsRange === 1 && 'active'}`} onClick={() => handleRange('bedroomsRange', 1)}>Low-High</button>
          <button className={`${settingsData.bedroomsRange === 2 && 'active'}`} onClick={() => handleRange('bedroomsRange', 2)}>High-Low</button>
        </div>
      </div>
      <div className='box'>
        <div className='header'>
          <h2>Bathrooms</h2>
        </div>
        <div className='split'>
          <div className='input'>
            <button className={`${settingsData.bathrooms === 0 && 'active'}`} onClick={() => handleRooms('bathrooms', 0)}>Rooms 0</button>
            <button className={`${settingsData.bathrooms === 2 && 'active'}`} onClick={() => handleRooms('bathrooms', 2)}>Rooms 2</button>
            <button className={`${settingsData.bathrooms === 4 && 'active'}`} onClick={() => handleRooms('bathrooms', 4)}>Rooms 4</button>
          </div>
          <div className='input'>
            <button className={`${settingsData.bathrooms === 1 && 'active'}`} onClick={() => handleRooms('bathrooms', 1)}>Rooms 1</button>
            <button className={`${settingsData.bathrooms === 3 && 'active'}`} onClick={() => handleRooms('bathrooms', 3)}>Rooms 3</button>
            <button className={`${settingsData.bathrooms === 5 && 'active'}`} onClick={() => handleRooms('bathrooms', 5)}>Rooms 5+</button>
          </div>
        </div>
        <div className='btn'>
          <button className={`${settingsData.bathroomsRange === 1 && 'active'}`} onClick={() => handleRange('bathroomsRange', 1)}>Low-High</button>
          <button className={`${settingsData.bathroomsRange === 2 && 'active'}`} onClick={() => handleRange('bathroomsRange', 2)}>High-Low</button>
        </div>
      </div>
    </div>
    <div className='CategoryHouses'>

        <div className='settings'>
          <div className='option filter' onClick={handleMobileSettings}>
            <p>Filter</p>
          </div>
          <div className='option'>
            <p onClick={() => handleOpen('openPrice')}>Price By <IoIosArrowDown className='icon'/></p>
            {settingsData.activeSection === 'openPrice' &&
              <div className='manage'>
                <input 
                  type="text" 
                  placeholder='No Min'
                  value={settingsData.minPrice}
                  onChange={(e) => handleChangeValue('minPrice', e.target.value, 15)}
                />
                <input 
                  type="text" 
                  placeholder='No Max'
                  value={settingsData.maxPrice}
                  onChange={(e) => handleChangeValue('maxPrice', e.target.value, 15)}
                />
                <div className='btn'>
                  <button className={`${settingsData.priceRange === 1 && 'active'}`} onClick={() => handleRange('priceRange', 1)}>Low-High</button>
                  <button className={`${settingsData.priceRange === 2 && 'active'}`} onClick={() => handleRange('priceRange', 2)}>High-Low</button>
                </div>
              </div>
            }
          </div>
          <div className='option'>
            <p onClick={() => handleOpen('openArea')}>Area Property <IoIosArrowDown className='icon'/></p>
            {settingsData.activeSection === 'openArea' &&
              <div className='manage'>
                <input 
                  type="text" 
                  placeholder='No Min'
                  value={settingsData.minArea}
                  onChange={(e) => handleChangeValue('minArea', e.target.value, 15)}
                />
                <input 
                  type="text" 
                  placeholder='No Max'
                  value={settingsData.maxArea}
                  onChange={(e) => handleChangeValue('maxArea', e.target.value, 15)}
                />
                <div className='btn'>
                  <button className={`${settingsData.areaRange === 1 && 'active'}`} onClick={() => handleRange('areaRange', 1)}>Low-High</button>
                  <button className={`${settingsData.areaRange === 2 && 'active'}`} onClick={() => handleRange('areaRange', 2)}>High-Low</button>
                </div>
              </div>
            }
          </div>
          <div className='option'>
            <p onClick={() => handleOpen('openBedrooms')}>Bedrooms <IoIosArrowDown className='icon'/></p>
            {settingsData.activeSection === 'openBedrooms' &&
              <div className='manage'>
                <div className='beds-btn'>
                  <button className={`${settingsData.bedrooms === 1 && 'active'}`} onClick={() => handleRooms('bedrooms', 1)}>Bedrooms 1</button>
                  <button className={`${settingsData.bedrooms === 2 && 'active'}`} onClick={() => handleRooms('bedrooms', 2)}>Bedrooms 2</button>
                  <button className={`${settingsData.bedrooms === 3 && 'active'}`} onClick={() => handleRooms('bedrooms', 3)}>Bedrooms 3</button>
                  <button className={`${settingsData.bedrooms === 4 && 'active'}`} onClick={() => handleRooms('bedrooms', 4)}>Bedrooms 4</button>
                  <button className={`${settingsData.bedrooms === 5 && 'active'}`} onClick={() => handleRooms('bedrooms', 5)}>Bedrooms 5+</button>
                </div>
              </div>
            }
          </div>
          <div className='option'>
            <p onClick={() => handleOpen('openBathrooms')}>Bathrooms <IoIosArrowDown className='icon'/></p>
            {settingsData.activeSection === 'openBathrooms' &&
              <div className='manage'>
                <div className='beds-btn'>
                  <button className={`${settingsData.bathrooms === 1 && 'active'}`} onClick={() => handleRooms('bathrooms', 1)}>Bathrooms 1</button>
                  <button className={`${settingsData.bathrooms === 2 && 'active'}`} onClick={() => handleRooms('bathrooms', 2)}>Bathrooms 2</button>
                  <button className={`${settingsData.bathrooms === 3 && 'active'}`} onClick={() => handleRooms('bathrooms', 3)}>Bathrooms 3</button>
                  <button className={`${settingsData.bathrooms === 4 && 'active'}`} onClick={() => handleRooms('bathrooms', 4)}>Bathrooms 4</button>
                  <button className={`${settingsData.bathrooms === 5 && 'active'}`} onClick={() => handleRooms('bathrooms', 5)}>Bathrooms 5+</button>
                </div>
              </div>
            }
          </div>
        </div>
        <div className='container'>
          {homesByOptions.length > 0 ? (
            homesByOptions.slice(0, propertyShows).map((info, index) => (
            <Link to={`property/${info.id}`} className='card-con' style={{ width: cardWidth}} key={index}>
                <div className='card' style={{ height: cardWidth / 1.5}}>
                <img src={info.image} alt="" loading='lazily'/>
                </div>
                <div className='info'>
                    <div className='price'>
                    <h2>${info.purchasePrice.toLocaleString()}</h2>
                    </div>
                    <div className='about'>
                    <p><strong>{info.bedroom}</strong>bed</p>
                    <p><strong>{info.bathroom}</strong>bath</p>
                    <p><strong>{info.areaProperty}</strong>m2</p>
                    </div>
                    <div className='place'>
                    <p>{info.street}</p>
                    <p>{info.location}</p>
                    </div>
                </div>
            </Link>
            ))
          ) : (
            <div className='search-img'>
              <img src={Search} alt="" className='search-img' />
            </div>
          )}
          {homesByOptions.length > propertyShows ? (
            <div className='propery-btn-con'>
              <button onClick={handleShowMorePropery}>show more</button>
            </div>
          ) : null}
      </div>

      <GlobalContact />

    </div>
    </>
  )
}

export default CategoryHouses
