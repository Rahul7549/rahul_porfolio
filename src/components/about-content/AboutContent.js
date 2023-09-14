import React from 'react'
import './AboutContentStyles.css'
import { Link } from 'react-router-dom'
import img1 from '../../assets/project1.avif'
import img2 from '../../assets/project2.jpg'
export default function AboutContent() {
  return (
    <div className='about'>
        <div className='left'>
            <h1>Who AM I</h1>
            <p>
            A Software Developer with 2+ year of experience 
            specializing in user interface design, application development, 
            Data security, REST API's Development and continuous improvement using
            Angular,ReactJs,Java Spring MVC,NodeJs,postgresql,mysql.
            </p>
            <Link to="/contact">
                <button className='btn'>Contact</button>
            </Link>
        </div>
        <div className='right'>
            <div className='img-container'>
                <div className='img-stack top'>
                    <img src={img1} className='img' alt='True'/>
                </div>

                <div className='img-stack bottom'>
                    <img src={img2} className='img' alt='True'/>
                </div>

            </div>
        </div>
      
    </div>
  )
}
