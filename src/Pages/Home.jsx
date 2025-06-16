import React from 'react'
import Hero from '../Components/Hero'
import BestSellers from '../Components/BestSellers'
import Category from '../Components/Category'
import VideoSection from '../Components/VideoSection'
import PopularPicks from '../Components/PopularPicks'
import Awards from '../Components/Awards'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Newlaunch from '../Components/Newlaunch'
import HeroSection from '../Components/HeroSection'

const Home = () => {
  return (
    <div className='bg-[#c8a2c8]'>
      <Navbar/>
      {/* <Hero/> */}
      <HeroSection/>
      <BestSellers/>
      <Category/>
      <Newlaunch/>
      {/* <VideoSection/> */}
      <PopularPicks/>
      {/* <Awards/> */}
      <Footer/>
    </div>
  )
}

export default Home
