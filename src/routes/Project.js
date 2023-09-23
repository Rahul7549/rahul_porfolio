import React from 'react'
import Footer from '../components/footer/Footer'
import BackGroundImg from '../components/background-image/BackGroundImg'
import ProjectCard from '../components/project-card/ProjectCard'
export default function Project() {
  return (
    
     <div>
        <BackGroundImg heading="PROJECTS." 
        text="some of project my most recent works"/>
        <ProjectCard/>
        <Footer/>
     </div>
    
  )
}
