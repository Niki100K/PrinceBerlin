import { useContext } from 'react'
import { useInView } from 'react-intersection-observer'

import selling1 from '../assets/discover/selling1.png'
import selling2 from '../assets/discover/selling2.png'
import selling3 from '../assets/discover/selling3.png'

import places1 from '../assets/recommended/places1.jpg'
import places2 from '../assets/recommended/places2.jpg'
import places3 from '../assets/recommended/places3.jpg'
import places4 from '../assets/recommended/places4.jpg'
import places5 from '../assets/recommended/places5.jpg'
import places6 from '../assets/recommended/places6.jpg'
import places7 from '../assets/recommended/places7.jpg'
import places8 from '../assets/recommended/places8.jpg'

import { ActiveStatus } from '../ActiveStatus'

const MainPage = () => {

  const { homesData, mainParoperty1, mainParoperty2 } = useContext(ActiveStatus)

    const [ref1, inView1] = useInView()
    const [ref5, inView5] = useInView({ triggerOnce: true })
    const [ref6, inView6] = useInView({ triggerOnce: true })
    const [ref7, inView7] = useInView()
    const [ref8, inView8] = useInView()

    const discover_cards = {
      selling: [
        {
          img: selling1,
          h3: 'Discover how to sell your property',
          p: "Sell with a partner agent or take a cash offer",
          link: 'sell',
        },
        {
          img: selling2,
          h3: 'Sell your home with 6 steps',
          p: "Post your property in just minutes and find your digger",
          link: 'add-property',
        },
        {
          img: selling3,
          h3: 'Sellers guide',
          p: "Discover the latest seller guides",
          link: 'selling',
        },
      ]
    }

    const places_cards = [
      {
        img: places1,
        name: 'Recommended Homes',
        link: 'Recommended-Homes',
        span: homesData.filter(home => home.typeProperty === 'Recommended-Homes').length,
      },
      {
        img: places2,
        name: 'New Listings',
        link: 'New-Listings',
        span: homesData.filter(home => home.typeProperty === 'New-Listings').length,
      },
      {
        img: places3,
        name: 'Price Reduced',
        link: 'Price-Reduced',
        span: homesData.filter(home => home.typeProperty === 'Price-Reduced').length,
      },
      {
        img: places4,
        name: 'Open Houses',
        link: 'Open-Houses',
        span: homesData.filter(home => home.typeProperty === 'Open-Houses').length,
      },
      {
        img: places5,
        name: 'Recently Sold',
        link: 'Recently-Sold',
        span: homesData.filter(home => home.typeProperty === 'Recently-Sold').length,
      },
      {
        img: places6,
        name: 'New Construction',
        link: 'New-Construction',
        span: homesData.filter(home => home.typeProperty === 'New-Construction').length,
      },
      {
        img: places7,
        name: 'New Home Communities',
        link: 'New-Home-Communities',
        span: homesData.filter(home => home.typeProperty === 'New-Home-Communities').length,
      },
      {
        img: places8,
        name: 'Land',
        link: 'Land',
        span: homesData.filter(home => home.typeProperty === 'Land').length,
      },
    ]

    const offerts = [
      {
        mainParoperty1,
        h2: 'Featured Propertie',
        p: 'Take a look at our handpicked featured properties:',
        h3: 'Modern Apartment',
        li: [
          'Beautiful 2-bedroom apartment in the heart of the city. Spacious and well-designed.',
          'Another great feature of this apartment.',
          'One more unique selling point of this apartment.',
        ],
        links: '/Homes/property/11',
      },
      {
        mainParoperty2,
        h2: 'New Property',
        p: 'Take a look at our handpicked featured properties:',
        h3: 'Luxury Villa',
        li: [
          'Exquisite 4-bedroom villa with a private pool and stunning sea views',
          'Another fantastic feature of this villa.',
          'One more reason to choose this luxurious villa.',
        ],
        links: '/Homes/property/17',
      },
    ];
    

    const fun_section = {
      h2: 'Find Your Perfect Home',
      p: "Searching for your ideal home? We make it easy and enjoyable. Here's what we offer:",
      li: [
        "Beautiful Image Galleries: Explore properties with stunning image galleries that showcase every detail.",
        "Home Decor Inspiration: Get inspired with our home decor ideas and tips for creating",
        "Local Insights: Discover insights about the neighborhoods and communities where our properties are located.",
        "Real Estate Blog: Stay informed with our blog, covering real estate trends, tips, and market updates.",
        "Client Success Stories: Read success stories from our happy clients who found their dream homes with us.",
      ],
      a: 'Explore Available Homes',
      images: [
        'https://imageshouses.s3.amazonaws.com/image+(1).jpg',
        'https://imageshouses.s3.amazonaws.com/img+(6).jpg',
        'https://imageshouses.s3.amazonaws.com/img+(7).jpg',
      ],
    }

  return {
    ref1, inView1,
    ref5, inView5,
    ref6, inView6,
    ref7, inView7,
    ref8, inView8,

    discover_cards,
    places_cards,
    fun_section,
    offerts,
  } 
}

export default MainPage
