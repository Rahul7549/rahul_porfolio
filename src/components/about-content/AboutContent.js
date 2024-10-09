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
            Experienced Senior Software Engineer with 3+ years of expertise in Angular and full-stack development.
            Proven track record of designing responsive UIs, optimizing Single Page Applications (SPAs), and
            implementing secure RESTful APIs using Spring Boot, Express.js and Postgres. Skilled in state
            management (NgRx), lazy loading, and improving application performance. Strong leadership in
            mentoring teams and driving best practices to deliver scalable, high-performance solutions.
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
