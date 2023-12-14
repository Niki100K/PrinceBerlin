import { createContext, useState, useEffect, useRef } from "react"
export const ActiveStatus = createContext()
export const ActiveProvider = ({ children }) => {


  const [homesData, setHomesData] = useState([])
  const [mainParoperty1, setMainParoperty1] = useState([])
  const [mainParoperty2, setMainParoperty2] = useState([])
  const isInitialMount = useRef(true);
  
  
  
  const API = 'http://localhost:3004'
  const API_links = {
    PropertiesData: `${API}/allhomes`,
    Property17: `${API}/property/17`,
    Property11: `${API}/property/11`,
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const PropertiesFetch = await fetch(API_links.PropertiesData)
        const Property17Fetch = await fetch(API_links.Property17)
        const Property11Fetch = await fetch(API_links.Property11)

        const Fetch1 = await PropertiesFetch.json()
        const Fetch2 = await Property17Fetch.json()
        const Fetch3 = await Property11Fetch.json()
        
        setHomesData(Fetch1)
        setMainParoperty1(Fetch2)
        setMainParoperty2(Fetch3)
        
      } catch (err) {
        console.error(err);
      }
    }
    if (isInitialMount.current) {
        fetchData();
        isInitialMount.current = false;
    }
  }, [API_links.PropertiesData, API_links.Property11, API_links.Property17])


  return(
    <ActiveStatus.Provider value={{ homesData, API, setHomesData, mainParoperty1, mainParoperty2 }}>
      { children }
    </ActiveStatus.Provider>
  )
}
