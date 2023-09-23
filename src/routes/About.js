import React from 'react'
import BackGroundImg from '../components/background-image/BackGroundImg'
import Footer from '../components/footer/Footer'
import AboutContent from '../components/about-content/AboutContent'

export default function About() {
  document.title='About';
  return (
    <div>
      <BackGroundImg heading="ABOUT." 
      text="I am a friendly Front End Developer"/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}
