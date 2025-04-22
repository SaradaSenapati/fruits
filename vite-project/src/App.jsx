import React from 'react'
import Navbar from './Component/Navbar'
import Hero from './Component/Hero/Hero'
import Menu from './Component/Menus/Menu'
import Banner from './Component/Banners/Banner'
import Banner2 from './Component/Banners/Banner2'
import Banner3 from './Component/Banners/Banner3'

const App = () => {
  return (
    <>
    <div className='overflow-x-hidden'>

      <Navbar />
      <Hero/>
      <Menu/>
      <Banner/>
      <Banner2/>
      <Banner3/>


    </div>
      
    </>
  )
}

export default App
