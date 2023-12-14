import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MainPage, AboutUs, Contact, Careers, NavBar, CategoryHouses, Sell, Property, AddProperty, Selling, SellingSections, PropertyImages } from './components'
import { ActiveProvider } from './ActiveStatus'
const App = () => {
  return (
    <ActiveProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<><MainPage /><NavBar /></>} />
          <Route path='/aboutUs' element={<><AboutUs /><NavBar /></>} />
          <Route path='/contact' element={<><Contact /><NavBar /></>} />
          <Route path='/:link' element={<><CategoryHouses /><NavBar /></>} />
          <Route path='/careers' element={<><Careers /><NavBar /></>} />
          <Route path='/sell' element={<><Sell /><NavBar /></>} />
          <Route path='/:link/property/:id' element={<><Property /><NavBar /></>} />
          <Route path='/add-property' element={<><AddProperty /><NavBar /></>} />
          <Route path='/selling' element={<><Selling /><NavBar /></>} />
          <Route path='/selling/:sellingSection' element={<><SellingSections /><NavBar /></>} />
          <Route path='/:link/property/:id/images' element={<><PropertyImages /></>} />
        </Routes>
      </BrowserRouter>
    </ActiveProvider>
  )
}

export default App
