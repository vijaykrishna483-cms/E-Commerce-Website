import React from 'react'
import Hero from '../Components/Hero'
import BestSellers from '../Components/BestSellers'
import Category from '../Components/Category'
import VideoSection from '../Components/VideoSection'
import PopularPicks from '../Components/PopularPicks'
import Awards from '../Components/Awards'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'

const Home = () => {
  return (
    <div className='bg-[#c8a2c8]'>
      <Navbar/>
      <Hero/>
      <BestSellers/>
      <Category/>
      <VideoSection/>
      <PopularPicks/>
      <Awards/>
      <Footer/>
    </div>
  )
}

export default Home
