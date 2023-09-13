import React from 'react'
import Navbar from '../components/navBar/Navbar'
import HomeBackGroundImage from '../../src/components/background-image/HomeBackGroundImage'
import Footer from '../../src/components/footer/Footer'
import ProjectCard from '../components/project-card/ProjectCard'
export default function Home() {
  return (
    <>
     <Navbar/>
     <HomeBackGroundImage/>
     <ProjectCard/>
     <Footer/>
    </>
  )
}
