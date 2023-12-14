import React, { useEffect } from 'react';
import './MainPage.css';
import { Link } from 'react-router-dom'
import MainPageJS from '../../hooks/MainPage';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

import family from '../../assets/team/family.jpg'

import GlobalContact from '../globalContact/globalContact';



const MainPage = () => {


  const { 
    ref1, inView1,
    ref5, inView5,
    ref6, inView6,
    ref7, inView7,
    ref8, inView8,

    discover_cards,
    places_cards,
    fun_section,
    offerts,
  } = MainPageJS()

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [])

  return (
    <div className='MainPage'>


      <div className='main' ref={ref8}>
        <img src={family} alt="" />
        <div className='header'>
          <h1><strong>Prince<div className={`marker ${inView8 && 'show'}`}></div></strong>IV Berln</h1>
        </div>
      </div>

      <div className='recommended-places'>
        <div className='header'>
          <h2>Browse homes in Sofia, Bulgaria</h2>
        </div>
        <div className='cards'>
          {places_cards.slice(0, 4).map((info, index) => (
            <Link to={info.link} className='card' key={index}>
              <div className='img'>
                {info.img ? (
                  <img src={info.img} alt="" />
                ) : (
                  <div className='skeleton-recommended-places'></div>
                )}
              </div>
              <span>{info.span}</span>
              <h3>{info.name}</h3>
            </Link>
          ))}
        </div>
        <div className='cards'>
          {places_cards.slice(4, 8).map((info, index) => (
            <Link to={info.link} className='card' key={index}>
              <div className='img'>
                <img src={info.img} alt="" />
              </div>
              <span>{info.span}</span>
              <h3>{info.name}</h3>
            </Link>
          ))}
        </div>
      </div>

      <div className="fun-section" ref={ref5}>
        <h2 className={`${inView5 && 'show'}`}>{fun_section.h2}</h2>
        <p>{fun_section.p}</p>
        <ul>
          {fun_section.li.map((li, indexLi) => (
            <li key={indexLi}>{li}</li>
          ))}
        </ul>
        <Link to="/Homes" className="explore-homes-link">{fun_section.a}</Link>
        <div className="fun-images" ref={ref6}>
          {fun_section.images.map((info, indexI) => (
            <div className={`img ${inView6 && 'show'}`} key={indexI}>
              <img src={info} alt="" />
            </div>
          ))}
        </div>
      </div>

      <div className='discover' ref={ref1}>
        <div className='header'>
          <h2><strong>Discover <div className={`marker ${inView1 && 'show'}`}></div></strong> how we can help</h2>
          <div className='btn'>
          </div>
        </div>
          <div className='cards-con'>
            {discover_cards.selling.map((info, index) => (
              <Link to={`${info.link}`} className={`card ${inView1 && 'show'}`} key={index}>
                <div className='head'>
                  <h3>{info.h3}</h3>
                  <img src={info.img} alt="" />
                </div>
                <p>{info.p}</p>
              </Link>
            ))}
          </div>
      </div>

      <div className='offerts' ref={ref7}>
        {offerts.map((info, index) => (
          <div className='offert' key={index}>
            <div className={`img ${inView7 && 'show'}`}>
            <Swiper 
                spaceBetween={0}
                pagination={{
                  clickable: true,
                }}
                loop={true}
                modules={[Pagination]}
                className="offerts-mySwiper"
              >
                {info.mainParoperty1 &&
                  info.mainParoperty1.map((image, indexImg) => (
                    <SwiperSlide key={indexImg}><img src={image.image} alt="" /></SwiperSlide>
                  ))
                }
                {info.mainParoperty2 &&
                  info.mainParoperty2.map((image, indexImg) => (
                    <SwiperSlide key={indexImg}><img src={image.image} alt="" /></SwiperSlide>
                  ))
                }
              </Swiper>
            </div>
            <div className='info'>
              <h2 className={`${inView7 && 'show'}`}>{info.h2}</h2>
              <h3 className={`${inView7 && 'show'}`}>{info.h3}</h3>
              <ul>
                {info.li.map((li, indexLi) => (
                  <li className={`${inView7 && 'show'}`} key={indexLi}>{li}</li>
                ))}
              </ul>
              <div className='btn'>
                <Link to={info.links}>
                  <button className={`${inView7 && 'show'}`}>View Details</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <GlobalContact />

    </div>
  );
};

export default MainPage;
