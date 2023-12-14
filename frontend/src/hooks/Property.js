import { useCallback, useContext, useEffect, useRef, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ActiveStatus } from '../ActiveStatus'
import { FaHome } from "react-icons/fa";
import { MdDiamond, MdLiving } from "react-icons/md";
import { FaCalculator, FaDoorOpen } from "react-icons/fa6";
import { PiStepsFill } from "react-icons/pi";
import { BsFillTagsFill } from "react-icons/bs";
import { SlSizeFullscreen } from "react-icons/sl";
const Property = () => {
    const {id} = useParams()
    const propertyId = parseInt(id, 10)
    const navigate = useNavigate()
    const {homesData, API} = useContext(ActiveStatus)

    const [propertyData, setPropertyData] = useState({})
    const [propertyImages, setPropertyImages] = useState([])

    const isLoaded = useRef(true)

    useEffect(() => {
        const data = homesData.find(property => property.id === propertyId)
        setPropertyData(data || {})
        console.log(data);
    }, [setPropertyData, homesData, propertyId])

    useEffect(() => {
        const fetchData = async () => {
            const fetchImages = await fetch(`${API}/property/${propertyId}`)
            const images = await fetchImages.json()
            setPropertyImages(images)
        }
        if (isLoaded.current) {
            fetchData()
            isLoaded.current = false
        }
    })

    const infoProperty = [
        {
            icon: FaHome,
            p: propertyData.typeHouse,
            span: 'Property Type',
        },
        {
            icon: FaCalculator,
            p: `${(propertyData.purchasePrice / propertyData.areaProperty).toFixed(2)}$`,
            span: 'Price per m2',
        },
        {
            icon: FaDoorOpen,
            p: propertyData.rooms,
            span: 'Rooms',
        },
        {
            icon: MdDiamond,
            p: propertyData.quality,
            span: 'Quality',
        },
        {
            icon: PiStepsFill,
            p: propertyData.floors,
            span: 'Floors',
        },
        {
            icon: BsFillTagsFill,
            p: propertyData.phase,
            span: 'Phase',
        },
        {
            icon: SlSizeFullscreen,
            p: propertyData.usableArea,
            span: 'Usable Area',
        },
        {
            icon: MdLiving,
            p: propertyData.livingArea,
            span: 'Living Area',
        },
    ]
    
    const [openOptions, setOpenOptions] = useState(false)

    const [imagesSlice, setImagesSlice] = useState(3)
    const [swiperView, setSwiperView] = useState(3)
    const handleChangeWidth = useCallback(() => {
        if (window.innerWidth <= 540) {
            setImagesSlice(2)
            setSwiperView(2)
        } else {
            setImagesSlice(3)
            setSwiperView(3)
        }
        if (window.innerWidth <= 380) {
            setSwiperView(1)
        }
    }, [])

    useEffect(() => {
        window.addEventListener('resize', handleChangeWidth)
        return () => {
            window.removeEventListener("resize", handleChangeWidth)
        }
    }, [handleChangeWidth])

    useEffect(() => {
        handleChangeWidth()
    }, [handleChangeWidth])

    const handleAddProperty = () => {
        navigate('/add-property')
    }

  return {
    propertyData,
    propertyId,
    handleAddProperty,
    propertyImages,
    imagesSlice,
    infoProperty,
    setOpenOptions,
    openOptions,
    swiperView,
  }
}

export default Property
