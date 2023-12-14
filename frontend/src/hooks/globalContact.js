import estate_logo from '../assets/logo/estate-logo.png'

import { AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai'
import { BiLogoFacebook } from 'react-icons/bi'
import { FaLinkedinIn } from 'react-icons/fa'
const globalContact = () => {

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
            link: '/',
            p: 'Home',
          },
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
            link: '/sell',
            p: 'Sell',
          },
          {
            link: '/selling',
            p: 'selling'
          },
          {
            link: '/Homes',
            p: 'Homes'
          },
          {
            link: '/add-property',
            p: 'Add property'
          },
        ],
        img1: estate_logo,
      }

  return {
    contact_info
  }
  
}

export default globalContact
