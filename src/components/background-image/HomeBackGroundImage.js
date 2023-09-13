import './HomeBackGroundImagStyle.css'
import IntroImg from '../../assets/img7.avif'
import React from 'react'
import { Link } from 'react-router-dom'

export default function HomeBackGroundImage() {
  return (
    <div className='back-image'>
      <div className='ui-mask'>
        <img className="into-image"
        src={IntroImg} alt='IntroImg' />
      </div>
      
      <div className='content'>
        <p> HI,I AM RAHUL KUMAR SHARMA</p>
        <h1>SOFTWARE ENGINEER</h1>
        <div>
          <Link to="/project" className='btn'>PROJECT</Link>
          <Link to="/contact" className='btn btn-light'>CONTACT</Link>
        </div>
      </div>

    </div>
  )
}
