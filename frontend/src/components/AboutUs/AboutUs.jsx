import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { Link as ScrollLink, Element } from 'react-scroll';
import './AboutUs.css'

import team_about from '../../assets/team/team_about.jpg'
import aboutus from '../../assets/team/aboutus.jpg'

import { LuHeartHandshake } from 'react-icons/lu'

import AboutUsJS from '../../hooks/AboutUs';
import GlobalContact from '../globalContact/globalContact'

const AboutUs = () => {
  
  const { 
    directors,

    ref1,
    ref2,
    ref3,
    ref4,

    inView1,
    inView2,
    inView3,
    inView4,

    company_info,
  } = AboutUsJS()


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  const [isAboutUsImageLoaded, setIsAboutUsImageLoaded] = useState(false);
  const handleAboutUsImageLoad = () => {
    setIsAboutUsImageLoaded(true);
  };

  return (
    <>
      <div className="About">

        <div className='video-con' ref={ref1}>
          <img src={aboutus} alt="" onLoad={handleAboutUsImageLoad} />
          <div className='header'>
            <h1><strong>Prince<div className={`marker ${inView1 && 'show'}`}></div></strong>Berlin IV</h1>
          </div>
        </div>
        {isAboutUsImageLoaded &&
          <>
        <div className='about-con' ref={ref2}>
          <h2 className={`${inView2 && 'show'}`}>About Prince Berlin.com®</h2>
          <p className={`${inView2 && 'show'}`}>For years, millions of home shoppers have turned to Prince Berlin.com® to find their dream home. Operated by Move, Inc., Prince Berlin.com® offers a comprehensive list of for-sale properties, as well as the information and tools to make informed real estate decisions. Today, more than ever, Prince Berlin.com® is The Home of Home Search℠.</p>
          <p className={`${inView2 && 'show'}`}>Prince Berlin.com® also offers homeowners a bevy of useful tools and resources through the My Home℠ dashboard. My Home℠ dashboard allows property owners to manage their home like the important investment it is by tracking their home’s value over time, researching and managing home improvements, and scouting other similar properties in the neighborhood.</p>
        </div>

        <div className='company'>
          <div className='con'>
            {company_info.company.map((info, index) => (
              <div className='mini-con' ref={ref3} key={index}>
                <div className='main-info'>
                  <h2 className={`${inView3 && 'show'}`}>{info.h2}</h2>
                  <h3 className={`${inView3 && 'show'}`}>{info.h3}</h3>
                  {info.p.map((p, indexP) => (
                    <p className={`${inView3 && 'show'}`} key={indexP}>{p}</p>
                  ))}
                  <Link to={info.link}>
                    <button>Contact</button>
                  </Link>
                </div>
                <div className='img'>
                  <div className={`bg ${inView3 && 'hide'}`}></div>
                  <img src={team_about} alt="" />
                </div>
              </div>
            ))}
            <div className='mini-con'>
              {company_info.hows.slice(0, 1).map((info, index) => (
                <div className='main-info' ref={ref4} key={index}>
                  <h2 className={`${inView4 && 'show'}`}>{info.h2}</h2>
                  {info.p.map((p, indexP) => (
                    <p className={`${inView4 && 'show'}`} key={indexP} dangerouslySetInnerHTML={{ __html: p}}></p>
                  ))}
                  <p className={`${inView4 && 'show'}`}>To read our ESG strategy, please click <ScrollLink to='ESG' spy={true} smooth={true} offset={-70} duration={500}>here</ScrollLink>.</p>
                </div>
              ))}
              {company_info.hows.slice(1, 2).map((info, index) => (
                <div className='hows' key={index}>
                  <h2>{info.h2}</h2>
                  <p>{info.p}</p>
                  <div className='lines-con'>
                    {info.lines.map((infoLine, indexLine) => (
                      <div className='line' key={indexLine}>
                          <div className='part'>
                            <LuHeartHandshake className={`heart ${inView4 && 'show'}`}/>
                            <p className={`${inView4 && 'show'}`}>{infoLine.p1}</p>
                          </div>
                          <div className='part'>
                            <LuHeartHandshake className={`heart ${inView4 && 'show'}`}/>
                            <p className={`${inView4 && 'show'}`}>{infoLine.p2}</p>
                          </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='directors'>
          <div className='header'>
            <h2>Board of Directors</h2>
            <p>Our Board is collectively responsible for promoting the long-term success of the Company for the benefit of Rightmove’s shareholders and wider stakeholders including customers, consumers, employees, the wider communities in which we operate and the environment. Rightmove’s Board of Directors comprises individuals from different backgrounds with a mix of skills, experience, knowledge, and perspectives. A majority of the Board are independent non-executive directors.</p>
          </div>
          <div className='directors-con'>
            {directors.map((info, index) => (
              <div className='director' key={index}>
                <div className='img'>
                  <img src={info.img} alt="" />
                </div>
                <div className='info'>
                  <h3>{info.name}</h3>
                  <p>{info.position}</p>
                </div>
              </div>
            ))}

          </div>
        </div>

        <div className='esg'>
        <Element name='ESG'/>
          <div className='container'>
            <h2>ESG</h2>
            <div className='con'>
              <div className='header'>
                <h3>Rightmove is a <span>sustainable</span>, <span>responsible</span>  business, that generates value for all stakeholders.</h3>
              </div>
              <div className='info'>
                <p>Rightmove’s environmental, social and governance (ESG) strategy has since 2019 had two goals:</p>
                <ul>
                  <li>To continue to make our business better and more sustainable, by securing our platforms and systems, minimising our environmental impact, ensuring meaningful diversity in the workforce and strong corporate governance; and</li>
                  <li>To make a difference beyond the direct operation of our business, through the reach of our platforms and our contribution to wider society.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <GlobalContact />
          </>
        }


      </div>
    </>
  );
}

export default AboutUs;
