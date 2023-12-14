import React, { useEffect, useState } from 'react'
import './NavBar.css'
import { Link, useNavigate } from 'react-router-dom'
import navbar from '../../assets/logo/navbar.png'

import { FaHome, FaAllergies, FaSuitcase } from "react-icons/fa";
import { MdContacts, MdSell } from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";

import { MdKeyboardArrowDown } from "react-icons/md";
const NavBar = () => {

  const navigate = useNavigate()

  const buy = [
    {
      p: [
        "Recommended Homes",
        "New Listings",
        "Price Reduced",
        "Open Houses",
      ],
      link: [
        "/Recommended-Homes",
        "/New-Listings",
        "/Price-Reduced",
        "/Open-Houses",
      ],
    },
    {
      p: [
        "Recently Sold",
        "New Construction",
        "New Home Communities",
        "Land",
      ],
      link: [
        "/Recently-Sold",
        "/New-Construction",
        "/New-Home-Communities",
        "/Land",
      ],
    },
  ]
  const sell = [
    {
        p: [
        "Explore your options",
        "Sellers guide",
        ],
        link: [
        "/sell",
        "/selling",
        ],
    },
    {
        p: [
        "Post For Sale by Owner",
        ],
        link: [
        "/add-property",
        ],
    }
  ]
  const [openNavigate, setOpenNavigate] = useState(0)

  const handleCloseNavigate = () => {
    setOpenNavigate(0)
  }
  const handleNavigateMainPage = () => {
    navigate('/')
  }

  const [mobileNav, setMobileNav] = useState(false)

  const handleMobileNav = () => {
    if (window.innerWidth < 880) {
      setMobileNav(true)
    } else {
      setMobileNav(false)
    }
  }

  useEffect(() => {
    handleMobileNav()
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleMobileNav)
    return () => {
      window.removeEventListener('resize', handleMobileNav)
    }
  }, [])

  const [mobileArrow, setMobileArrow] = useState(0)
  const handleOpenMobileArrow = (number) => {
    if (number === mobileArrow) {
      setMobileArrow(0)
    } else if (number === mobileArrow) {
      setMobileArrow(0)
    } else {
      setMobileArrow(number)
    }
  }

  const [mobileUl, setMobileUl] = useState(false)
  

  return (
    <div className={`NavBar ${openNavigate !== 0 && 'fixed'}`} onMouseLeave={handleCloseNavigate}>
      <nav>
        <div className={`navigate ${mobileNav && 'close'}`}>
          <p className={`${openNavigate === 1 && 'color'}`} onMouseEnter={() => setOpenNavigate(1)}><Link to='/Homes'>Buy Property</Link></p>
          <p className={`${openNavigate === 2 && 'color'}`} onMouseEnter={() => setOpenNavigate(2)}><Link to='/sell'>Sell Property</Link></p>
        </div>
        <div className='logo' onClick={handleNavigateMainPage}>
          <img src={navbar} alt="" />
          <h2>Prince Berlin</h2>
        </div>
        <ul className={`${mobileUl && 'show'}`}>
          {mobileNav &&
            <div className='closeCon'>
              <div className='box' onClick={() => setMobileUl(!mobileUl)}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          }
          <li onClick={() => setMobileUl(false)}>
            <Link to='/'>
              <FaHome id='icon'/>
              <span>Home</span>
            </Link>
          </li>
          <li onClick={() => setMobileUl(false)}>
            <Link to='/contact'>
              <MdContacts id='icon'/>
              <span>Contact</span>
            </Link>
          </li>
          <li onClick={() => setMobileUl(false)}>
            <Link to='/aboutus'>
              <FaAllergies id='icon'/>
              <span>About Us</span>
            </Link>
          </li>
          <li onClick={() => setMobileUl(false)}>
            <Link to='/careers'>
              <PiStudentBold id='icon'/>
              <span>Careers</span>
            </Link>
          </li>
          {mobileNav &&
            <>
          <li onClick={() => handleOpenMobileArrow(1)}>
            <Link>
              <FaSuitcase id='icon'/>
              <span>Buy Property<MdKeyboardArrowDown className={`arrow ${mobileArrow === 1 && 'rotate'}`}/></span>
            </Link>
            {mobileArrow === 1 &&
              <div className='details'>
                {buy.map((info, index) => (
                  <ol key={index}>
                    {info.p.map((p, indexP) => (
                      <li onClick={() => setMobileUl(false)} key={indexP}>
                        <Link to={info.link[indexP]}>
                          {p}
                        </Link>
                      </li>
                    ))}
                  </ol>
                ))}
              </div>
            }
          </li>
          <li onClick={() => handleOpenMobileArrow(2)}>
            <Link>
              <MdSell id='icon'/>
              <span>Sell Property<MdKeyboardArrowDown className={`arrow ${mobileArrow === 2 && 'rotate'}`}/></span>
            </Link>
            {mobileArrow === 2 &&
              <div className='details'>
                {sell.map((info, index) => (
                  <ol key={index}>
                    {info.p.map((p, indexP) => (
                      <li onClick={() => setMobileUl(false)} key={indexP}>
                        <Link to={info.link[indexP]}>
                          {p}
                        </Link>
                      </li>
                    ))}
                  </ol>
                ))}
              </div>
            }
          </li>
            </>
          }
        </ul>
        <div className='mobileOpenNav' onClick={() => setMobileUl(!mobileUl)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
      <div className='navLine'>
        <div className='fixer'></div>
        <div className={`buy ${openNavigate === 1 && 'height'}`}>
          {buy.map((info, index) => (
            <ol className={`${openNavigate === 1 && 'show'}`} key={index}>
              {info.p.map((p, indexP) => (
                <li key={indexP}>
                  <Link to={info.link[indexP]}>
                    {p}
                  </Link>
                </li>
              ))}
            </ol>
          ))}
        </div>
        <div className={`sell ${openNavigate === 2 && 'height'}`}>
          {sell.map((info, index) => (
            <ol className={`${openNavigate === 2 && 'show'}`} key={index}>
              {info.p.map((p, indexP) => (
                <li key={indexP}>
                  <Link to={info.link[indexP]}>
                    {p}
                  </Link>
                </li>
              ))}
            </ol>
          ))}
        </div>
      </div>
    </div>
  )
}

export default NavBar
