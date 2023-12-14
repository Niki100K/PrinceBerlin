import { useEffect, useState, useCallback, useContext } from 'react';
import { ActiveStatus } from '../ActiveStatus';
import { useLocation } from 'react-router-dom'
const CategoryHouses = () => {

  const location = useLocation()

  const {
    homesData
  } = useContext(ActiveStatus)

  const [filteredHomes, setFilteredHomes] = useState([]);
  useEffect(() => {
    switch (location.pathname) {
      case '/Recommended-Homes':
        setFilteredHomes(homesData.filter(home => home.typeProperty === 'Recommended-Homes'));
        break;
      case '/New-Listings':
        setFilteredHomes(homesData.filter(home => home.typeProperty === 'New-Listings'));
        break;
      case '/Price-Reduced':
        setFilteredHomes(homesData.filter(home => home.typeProperty === 'Price-Reduced'));
        break;
      case '/Open-Houses':
        setFilteredHomes(homesData.filter(home => home.typeProperty === 'Open-Houses'));
        break;
      case '/Recently-Sold':
        setFilteredHomes(homesData.filter(home => home.typeProperty === 'Recently-Sold'));
        break;
      case '/New-Construction':
        setFilteredHomes(homesData.filter(home => home.typeProperty === 'New-Construction'));
        break;
      case '/New-Home-Communities':
        setFilteredHomes(homesData.filter(home => home.typeProperty === 'New-Home-Communities'));
        break;
      case '/Land':
        setFilteredHomes(homesData.filter(home => home.typeProperty === 'Land'));
        break;
      default:
        setFilteredHomes(homesData);
        break;
    }
  }, [location.pathname, homesData]);
    const [corerct, setCorerct] = useState(1)
  
    let widthIndex = 4.1
    if (window.innerWidth > 1040) {
      widthIndex = 4.1
    } 
    if (window.innerWidth < 1040) {
      widthIndex = 3.1
    } 
    if (window.innerWidth < 840) {
      widthIndex = 2.1
    } 
    if (window.innerWidth < 540) {
      widthIndex = 1
    } 
  
    const [cardWidth, setCardWidth] = useState(window.innerWidth / widthIndex)
  
    const handleResize = useCallback(() => {
      setCorerct(1);
      setCardWidth(window.innerWidth / widthIndex);
    }, [widthIndex]);
    
    if (corerct === 1) {
      handleResize()
      setCorerct(2)
    }
  
    useEffect(() => {
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, [handleResize]);


  const [propertyShows, setPropertyShows] = useState(12)
  
  const handleShowMorePropery = () => {
    setPropertyShows(propertyShows + 12)
  }

  const [settingsData, setSettingsData] = useState({
    activeSection: null,
    openPrice: false,
    openArea: false,
    openBedrooms: false,
    openBathrooms: false,
    minPrice: '',
    maxPrice: '',
    minArea: '',
    maxArea: '',
    priceRange: 0,
    areaRange: 0,
    bedrooms: null,
    bathrooms: null,
    bedroomsRange: 0,
    bathroomsRange: 0,
  })

  const handleChangeValue = (field, value, maxSymbols) => {
    const onlyNumbers = value.replace(/\D/g, '')
    setSettingsData(prev => ({
      ...prev,
      [field]: onlyNumbers.length > maxSymbols ? onlyNumbers.slice(0, maxSymbols) : onlyNumbers
    }))
  }
  const handleRange = (field, value) => {
    if (value === settingsData[field]) {
      setSettingsData(prev => ({
        ...prev,
        [field]: 0
      }))        
    } else {
      setSettingsData(prev => ({
        ...prev,
        [field]: value
      }))
    }
  }
  const handleOpen = (field) => {
    setSettingsData(prev => ({
      ...prev,
      activeSection: prev.activeSection === field ? null : field,
    }));
  };
  const handleRooms = (field, value) => {
    if (value === settingsData[field]) {
      setSettingsData(prev => ({
        ...prev,
        [field]: null,
      }))
    } else {
      setSettingsData(prev => ({
        ...prev,
        [field]: value,
      }))
    }
  }

  const [homesByOptions, setHomesByOptions] = useState([])

  useEffect(() => {
    const homes = filteredHomes.filter(house => {
      const minPrice = !settingsData.minPrice || house.purchasePrice >= parseInt(settingsData.minPrice)
      const maxPrice = !settingsData.maxPrice || house.purchasePrice <= parseInt(settingsData.maxPrice)
      const bedrooms = settingsData.bedrooms === null || settingsData.bedrooms === parseInt(house.bedroom) || (settingsData.bedrooms === 5 && house.bedroom >= 5)
      const bathrooms = settingsData.bathrooms === null || settingsData.bathrooms === parseInt(house.bathroom) || (settingsData.bathrooms === 5 && house.bathroom >= 5)
      const minArea = !settingsData.minArea || house.areaProperty >= parseInt(settingsData.minArea)
      const maxArea = !settingsData.maxArea || house.areaProperty <= parseInt(settingsData.maxArea)
      return minPrice && maxPrice && bedrooms && bathrooms && minArea && maxArea
    })
    if (settingsData.priceRange === 1) {
      homes.sort((a, b) => a.purchasePrice - b.purchasePrice)
    } else if (settingsData.priceRange === 2) {
      homes.sort((a, b) => b.purchasePrice - a.purchasePrice)
    }

    if (settingsData.areaRange === 1) {
      homes.sort((a, b) => a.areaProperty - b.areaProperty)
    } else if (settingsData.areaRange === 2) {
      homes.sort((a, b) => b.areaProperty - a.areaProperty)
    }

    if (settingsData.bedroomsRange === 1) {
      homes.sort((a, b) => a.bedroom - b.bedroom)
    } else if (settingsData.bedroomsRange === 2) {
      homes.sort((a, b) => b.bedroom - a.bedroom)
    }

    if (settingsData.bathroomsRange === 1) {
      homes.sort((a, b) => a.bathroom - b.bathroom)
    } else if (settingsData.bathroomsRange === 2) {
      homes.sort((a, b) => b.bathroom - a.bathroom)
    }
    setHomesByOptions(homes)
  }, [filteredHomes, settingsData.maxPrice, settingsData.minPrice, settingsData.bathrooms, settingsData.bedrooms, settingsData.priceRange, settingsData.areaRange, settingsData.minArea, settingsData.maxArea, settingsData.bathroomsRange, settingsData.bedroomsRange])

  const [mobileSettings, setMobileSettings] = useState(false)
  const handleMobileSettings = () => {
    setMobileSettings(!mobileSettings)
  }

  return {
    cardWidth,
    handleShowMorePropery,
    propertyShows,


    settingsData,
    handleChangeValue,
    handleRange,
    handleOpen,
    handleRooms,
    homesByOptions,

    handleMobileSettings,
    mobileSettings,
  }
}

export default CategoryHouses
