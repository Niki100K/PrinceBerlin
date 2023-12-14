import team1 from '../assets/team/team1.png'
import team2 from '../assets/team/team2.png'
import team3 from '../assets/team/team3.png'
import team4 from '../assets/team/team4.png'
import team5 from '../assets/team/team5.png'
import team6 from '../assets/team/team6.png'

import team_about from '../assets/team/team_about.jpg'

import { useInView } from 'react-intersection-observer'

const AboutUs = () => {

    const [ref1, inView1] = useInView({ triggerOnce: true})
    const [ref2, inView2] = useInView({ triggerOnce: true})
    const [ref3, inView3] = useInView({ triggerOnce: true})
    const [ref4, inView4] = useInView({ triggerOnce: true})

  
    const directors = [
        {
            img: team1,
            name: 'Andrew Fisher',
            position: 'Chair',
        },
        {
            img: team2,
            name: 'Alison Dolan',
            position: 'Chief Financial Officer',
        },
        {
            img: team3,
            name: 'Kriti Sharma',
            position: 'Independent Non Executive Director',
        },
        {
            img: team4,
            name: 'Andrew Fisher',
            position: 'Chair',
        },
        {
            img: team5,
            name: 'Andrew Fisher',
            position: 'Chair',
        },
        {
            img: team6,
            name: 'Andrew Fisher',
            position: 'Chair',
        },
    ]

    const company_info = {
        company: [
            {
                h2: "Company",
                h3: 'Vision',
                p: [
                    "Rightmove’s vision is to give everyone the belief they can make their move.",
                    "Our mission is to make the move easier and simpler, by giving everyone the best place to turn to and return to, for accessing the tools, expertise and trust to make it happen.",
                    "Rightmove is the UK’s number one property portal.",
                ],
                link: '/contact',
                img: team_about,
            }
        ],
        hows: [
            {
                h2: 'Culture and Values',
                p: [
                    "<span>Our ambition</span> is to be the place that consumers and customers turn to as their property portal of choice. To deliver that objective, Rightmove needs to be a sustainable business that people want to work for, invest in and partner with.",
                    "<span>Our strategy</span> is to make Rightmove a great place to work through an open, collaborative culture, based on the belief that we are all in it together. Rightmove aims to be a supportive and inclusive employer with a diverse workforce.",
                ],
            },
            {
                h2: "The ‘Hows’",
                p: 'At the heart of everything we do are the Rightmove Hows – the essential values and behaviours which reflect our culture.',
                lines: [
                    {
                        p1: 'Do the right thing for consumers and customers',
                        p2: 'Build great teams because Rightmove is people',
                    },
                    {
                        p1: 'Be curious and go out of your way to understand',
                        p2: 'Share honestly, early and often',
                    },
                    {
                        p1: 'Take responsibility and make things that matter happen',
                        p2: 'Make complex things as simple as possible',
                    },
                    {
                        p1: 'Drive improvement, we can always be better',
                        p2: 'Dare to do, be bold - don’t be afraid of mistakes you can learn from',
                    },
                ]                
            }
        ]
    }

  return {
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
  }
}

export default AboutUs
