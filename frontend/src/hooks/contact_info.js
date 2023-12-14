import estate_logo from '../assets/logo/estate-logo.png'
import main1 from '../assets/logo/main1.png'

import { AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai'
import { BiLogoFacebook } from 'react-icons/bi'
import { FaLinkedinIn } from 'react-icons/fa'

const contact_info = () => {

    const contact_info = {
        social_links: [
          {
            link: 'https://www.instagram.com/',
            icon: AiFillInstagram,
          },
          {
            link: 'https://twitter.com/',
            icon: AiOutlineTwitter,
          },
          {
            link: 'https://www.facebook.com/',
            icon: BiLogoFacebook,
          },
          {
            link: 'https://www.linkedin.com/',
            icon: FaLinkedinIn,
          },
        ],
        web_links: [
          {
            link: '/aboutus',
            p: 'About Us',
          },
          {
            link: '/careers',
            p: 'Careers',
          },
          {
            link: '/contact',
            p: 'Contact',
          },
          {
            link: '/feedback',
            p: 'FeedBack',
          },
        ],
        img1: estate_logo,
        img2: main1,
      }
    
  return {
    contact_info
  }
}

export default contact_info
