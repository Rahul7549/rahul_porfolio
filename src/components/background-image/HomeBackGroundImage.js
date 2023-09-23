import './HomeBackGroundImagStyle.css'
import IntroImg from '../../assets/img7.avif'
import React from 'react'
import { Link } from 'react-router-dom'
import profilepic from '../../assets/avatar.jpg'
import resume from '../../assets/Rahul_Kumar_Sharma_2023.pdf'

export default function HomeBackGroundImage() {
  return (
    <div className='back-image'>
      <div className='ui-mask'>
        <img className="into-image"
        src={IntroImg} alt='IntroImg' />
      </div>
      
      <div className='content'>

        <span className='profile-pic'>
          <img src={profilepic} alt='Rahul Sharma'/>
        </span>

        <p> HI,I AM RAHUL KUMAR SHARMA</p>
        <h1>SOFTWARE ENGINEER</h1>
        <div>
          <Link to="/project" className='btn'>PROJECT</Link>
          <Link to="/contact" className='btn btn-light'>CONTACT</Link>
          <a className="resume-button btn" target='_blank' href={resume} rel="noopener noreferrer"  >VIEW RESUME</a>
        </div>
      </div>

    </div>
  )
}
