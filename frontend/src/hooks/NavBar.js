import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const NavBar = () => {

    const location = useLocation()


    const steps_con_buy = [
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
        }
        ,
    ]
    const steps_con_sell = [
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

    const homes_con = [
        {
            a: '/Recommended-Homes',
            p: 'Recommended Homes',
        },
        {
            a: '/New-Listings',
            p: 'New Listings',
        },
        {
            a: '/Price-Reduced',
            p: 'Price Reduced',
        },
        {
            a: '/Open-Houses',
            p: 'Open Houses',
        },
        {
            a: '/Recently-Sold',
            p: 'Recently Sold',
        },
        {
            a: '/New-Construction',
            p: 'New Construction',
        },
        {
            a: '/New-Home-Communities',
            p: 'New Home Communities',
        },
        {
            a: '/Land',
            p: 'Land',
        },
    ]

    const [correctLink, setCorrectLink] = useState(1)

    useEffect(() => {
        if (location.pathname === '/') {
          setCorrectLink(1)
        }
        if (location.pathname === '/aboutus') {
          setCorrectLink(2)
        }
        if (location.pathname === '/careers') {
          setCorrectLink(3)
        }
        if (location.pathname === '/contact') {
          setCorrectLink(4)
        }
      }, [location])



    const [moveArrows, setMoveArrows] = useState(false)

    const [browseHomeArrow, setBrowseHomeArrow] = useState(false)

    const handlebrowseHomeArrow = () => {
        setBrowseHomeArrow(!browseHomeArrow)
    }

    const handleMoveArrows = () => {
        setMoveArrows(!moveArrows)
        setBrowseHomeArrow(false)
    }




    const [correctStep, setCorrectStep] = useState(0)

  
    const [optionSteps, setOptionSteps] = useState(false)
    const [onBigCon, setOnBigCon] = useState(false)
    const [hoverNumber, setHoverNumber] = useState(0)
  
    const handleOptionStep_True = (e) => {
      setOptionSteps(true)
      let number = e
      setHoverNumber(e)
      if (number === 1) {
        setCorrectStep(1)
      }
      if (number === 2) {
        setCorrectStep(2)
      }
      if (number === 3) {
        setCorrectStep(3)
      }
    }
    const handleOptionStep_False = () => {
      if (!onBigCon) {
        setOptionSteps(false)
        setCorrectStep(0)
      }
    }
    const handleOnBigCon_True = () => {
      setCorrectStep(hoverNumber)
      setOptionSteps(true)
      setOnBigCon(true)
    }
    const handleOnBigCon_False = () => {
      setOptionSteps(false)
      setOnBigCon(false)
      setCorrectStep(0)
    }

  return {
    steps_con_buy,
    steps_con_sell,
    homes_con,

    correctLink,

    moveArrows,
    browseHomeArrow,

    handlebrowseHomeArrow,
    handleMoveArrows,

    correctStep,
    optionSteps,

    handleOptionStep_True,
    handleOptionStep_False,
    handleOnBigCon_True,
    handleOnBigCon_False,
  }
}

export default NavBar
