import React, { useEffect, useState } from 'react'
import './SellingSections.css'
import { useLocation, Link } from 'react-router-dom'

import SellingSectionsJS from '../../hooks/SellingSections'
import GlobalContact from '../globalContact/globalContact';

const SellingSections = () => {

  const location = useLocation()
  const [correctSectionShow, setCorrectSectionShow] = useState(0)

  useEffect(() => {
    switch (location.pathname) {
      case '/selling/home-improvement':
          setCorrectSectionShow(1)
        break;
      case '/selling/new-construction':
        setCorrectSectionShow(2)
      break;
      case '/selling/painting':
        setCorrectSectionShow(3)
      break;
      case '/selling/interior-paint':
        setCorrectSectionShow(4)
      break;
      case '/selling/boost-your-home':
        setCorrectSectionShow(5)
      break;
      case '/selling/home-inspection':
        setCorrectSectionShow(6)
      break;
      case '/selling/seller-tips':
        setCorrectSectionShow(7)
      break;
      default:
        break;
    }
  }, [location.pathname])

  const {sections} = SellingSectionsJS()

  return (
    <div className='SellingSections'>
      {sections.slice(correctSectionShow - 1, correctSectionShow).map((info, index) => (
        <div className='con' key={index}>
          <div className='header'>
            <h2>{info.header}</h2>
            <p>{info.header_p}</p>
          </div>
          <div className='main-image'>
            <img src={info.main_image} alt="" />
          </div>
          <div className='information'>
            <div className='text'>
              <div className='main-info'>
                {info.under_img_text.map((img_text, indexUnderImg) => (
                  <p key={indexUnderImg}>{img_text}</p>
                ))}
              </div>
              {info.parts.map((part, indexPart) => (
                <div className='parts' key={indexPart}>
                  {part.h2 && <h2>{part.h2}</h2>}
                  {part.part_p &&
                    part.part_p.map((partP, indexPartP) => (
                      <p key={indexPartP}>{partP}</p>
                    ))
                  }
                  <div className='img'>
                    <img src={part.image} alt="" />
                  </div>
                  {part.costs &&
                    part.costs.map((infoCost, indexCost) => (
                      <div className='costs' key={indexCost}>
                        <h3>{infoCost.h3}</h3>
                        <ul>
                          {infoCost.ul.map((costUl, indexCostUl) => (
                            <li key={indexCostUl}>{costUl}</li>
                          ))}
                        </ul>
                        {infoCost.image &&
                          <div className='ul-img'>
                            <img src={infoCost.image} alt="" />
                          </div>
                        }
                      </div>
                    ))
                  }
                  {part.description &&
                    part.description.map((description, indexDes) => (
                      <div className='description' key={indexDes}>
                        <h2>{description.h3}</h2>
                        {description.earch_p.map((infoEarchP, indexEarchP) => (
                          <div className='earch-p-con' key={indexEarchP}>
                            {infoEarchP.every_p.map((infoEveryP, indexEveryP) => (
                              <p key={indexEveryP} dangerouslySetInnerHTML={{ __html: infoEveryP}}></p>
                            ))}
                            {infoEarchP.p_image &&
                              <img src={infoEarchP.p_image} alt="" />
                            }
                          </div>
                        ))}
                      </div>
                    ))
                  }
                </div>
              ))}
            </div>
            <div className='sticky-box'>
              <div className='box'>
                <h2>Have property for sell?</h2>
                <p>upload your property here.</p>
                <Link to='/add-property'>
                  <button>Start here</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
      <GlobalContact />
    </div>
  )
}

export default SellingSections
