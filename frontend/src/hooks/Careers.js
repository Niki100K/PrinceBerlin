import { useInView } from 'react-intersection-observer'

import city from '../assets/city.jpg'
import team from '../assets/team/team.jpg'
import support from '../assets/team/support.jpg'

import carrers_img from '../assets/team/carrers_img.jpg'


const Careers = () => {

    const [ref1, inView1] = useInView()
    const [ref2, inView2] = useInView()
    const [ref3, inView3] = useInView()

    const [ref4, inView4] = useInView()
    const [ref5, inView5] = useInView()
    const [ref6, inView6] = useInView()


    const discover = [
      {
        h2: 'Discover Scout24',
        p: 'Do you want to know what awaits you with us? What kind of culture do we cultivate and how do we treat each other? Discover your career options with us and what benefits we offer.',
        a: 'culture',
        img: support,
        ref: ref4,
        View: inView4,
      },
      {
        h2: 'Our teams',
        p: 'Do you want us to develop new products and services for us? Support us with legal issues? Or do you want to find new scouts for us? No matter where your personal and professional strengths lie, we have the right challenges for you.',
        a: 'To our teams',
        img: team,
        ref: ref5,
        View: inView5,
      },
      {
        h2: 'our locations',
        p: 'Eventful history, lavish nightlife, colorful culture – Berlin offers you everything in one. Come to us and become a Berliner.',
        a: 'To the location in Berlin',
        img: city,
        ref: ref6,
        View: inView6,
      },
    ]


  return {
    ref1,
    ref2,
    ref3,

    discover,

    inView1,
    inView2,
    inView3,

    carrers_img,
  }
}

export default Careers
