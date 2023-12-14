import services from '../assets/team/services.jpg'
import media from '../assets/storyset/media.png'
import social from '../assets/storyset/social.png'
import { useInView } from 'react-intersection-observer'
const Contact = () => {

  const [ref1, inView1] = useInView()
  const [ref2, inView2] = useInView()
  const [ref3, inView3] = useInView()
  const [ref4, inView4] = useInView()

  const [ref6, inView6] = useInView()
  const [ref7, inView7] = useInView()
  const [ref8, inView8] = useInView()
  const [ref9, inView9] = useInView()
  const [ref10, inView10] = useInView()
  const [ref11, inView11] = useInView()
  const [ref12, inView12] = useInView()
  const [ref13, inView13] = useInView()
  const [ref14, inView14] = useInView()
  
  
    const faq = [
      {
        h3: 'What financial services does Prince Berlin offer?',
        p: '<strong>Prince Berlin </strong> offers a wide range of financial services including investment planning, portfolio management, retirement planning, insurance solutions and estate planning. Our services are geared towards meeting the individual financial needs of our clients.',
        ref: ref6,
        view: inView6,
      },
      {
        h3: 'What is the professional experience of the Prince Berlin  team?',
        p: 'Our company is proud of highly educated and experienced financial specialists. Our team includes brokers, analysts and consultants with many years of experience in the field of investments and finance. Some of them hold Masters or even PhDs in their respective fields.',
        ref: ref7,
        view: inView7,
      },
      {
        h3: 'How can I contact Prince Berlin ?',
        p: 'You can contact us by email at <strong>example@email.com</strong> or by phone at +1 (123) 456-7890. Also, you can visit us at our address: 123 Main Street, City, Country. We are at your disposal to help you with your financial questions.',
        ref: ref8,
        view: inView8,
      },
      {
        h3: 'What is your investment philosophy?',
        p: 'Our investment philosophy is based on long-term planning and diversification. We believe in building portfolios that reflect our clients individual goals and risk profiles. We strive to find investment solutions that are in the best interest of our clients and ensure stability and growth.',
        ref: ref9,
        view: inView9,
      },
      {
        h3: 'What services do you offer?',
        p: 'We provide brokerage services in the area of capital markets, including stocks, bonds and derivatives.',
        ref: ref10,
        view: inView10,
      },
      {
        h3: 'How can I contact your team?',
        p: 'You can contact us through the contact form on this site or through our contact details.',
        ref: ref11,
        view: inView11,
      },
      {
        h3: 'What are the minimum investments you accept?',
        p: 'Minimum investments vary depending on the types of investments. However, we work with both individual and institutional investors.',
        ref: ref12,
        view: inView12,
      },
      {
        h3: 'What is your commission fee?',
        p: 'The commission fee depends on the types of transactions and investments. For details about our fees, contact our team.',
        ref: ref13,
        view: inView13,
      },
      {
        h3: 'Do you have investment tips for beginners?',
        p: 'Yes, we provide investment advice and educational resources for beginning investors. You can find more information on our website or contact our team for a consultation.',
        ref: ref14,
        view: inView14,
      },
    ]

    const contacts = [
      {
        img: services,
        h2: 'Customer contact',
        p: 'Our customer service colleagues will be happy to assist you with any questions you may have about real estate and our services.',
        btn: 'Click here for customer service',
        ref: ref1,
        view: inView1,
      },
      {
        img: media,
        h2: 'Contact with the media',
        p: 'Journalists and media representatives can find all important information about the company, products, market analyses, as well as up-to-date studies and research in our newsroom.',
        btn: 'Click here for media contact',
        ref: ref2,
        view: inView2,
      },
      {
        img: social,
        h2: 'Us on social media',
        p: 'Our social media team is on Facebook, Instagram, LinkedIn, YouTube, Twitter and our blog. We will be happy to answer all your questions through the appropriate channels.',
        btn: 'Social Media Magazine',
        ref: ref3,
        view: inView3,
      },
    ]

  return {
    faq,
    contacts,

    ref4,
    inView4,
  }
}

export default Contact
