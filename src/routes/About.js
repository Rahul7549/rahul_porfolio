import React from 'react'
import Navbar from '../components/navBar/Navbar'
import BackGroundImg from '../components/background-image/BackGroundImg'
import Footer from '../components/footer/Footer'
import AboutContent from '../components/about-content/AboutContent'

export default function About() {
  return (
    <div>
      <Navbar/>
      <BackGroundImg heading="ABOUT." 
      text="I am a friendly Front End Developer"/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}
