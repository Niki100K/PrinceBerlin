import selling1 from '../assets/selling/selling1.jpg'
import selling2 from '../assets/selling/selling2.jpg'
import selling3 from '../assets/selling/selling3.jpg'
import selling4 from '../assets/selling/selling4.jpg'
import selling5 from '../assets/selling/selling5.jpg'
import selling6 from '../assets/selling/selling6.jpg'
import selling7 from '../assets/selling/selling7.jpg'
const Selling = () => {

    const cards = [
        {
            img: selling1,
            span: 'Home Improvement',
            p: 'Best Home Improvements to Increase Value',
            link: '/selling/home-improvement',
        },
        {
            img: selling2,
            span: 'Buying',
            p: 'Why Everyone is Talking About New Construction',
            link: '/selling/new-construction',
        },
        {
            img: selling3,
            span: 'Preparing to sell',
            p: "avoid this color if your're painting your front door",
            link: '/selling/painting',
        },
        {
            img: selling4,
            span: 'Preparing to sell',
            p: 'besr interior paint color for selling your house',
            link: '/selling/interior-paint',
        },
        {
            img: selling5,
            span: 'marketing your home',
            p: "how to boost your home's screen appeal",
            link: '/selling/boost-your-home',
        },
        {
            img: selling6,
            span: 'closing your sale',
            p: 'who pays for home inspection and repairs: the buyer or seller?',
            link: '/selling/home-inspection',
        },
        {
            img: selling7,
            span: 'preparing to sell?',
            p: 'agent wisdom: seller tips for a fast-changing marker',
            link: '/selling/seller-tips',
        },
    ]

  return {
    cards
  }
}

export default Selling
