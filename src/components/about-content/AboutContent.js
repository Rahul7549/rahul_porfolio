import React from 'react'
import './AboutContentStyles.css'
import { Link } from 'react-router-dom'
import img1 from '../../assets/img4.avif'
import img2 from '../../assets/img3.avif'
export default function AboutContent() {
  return (
    <div className='about'>
        <div className='left'>
            <h1>Who AM I</h1>
            <p>
            Learn React JS Completely from scratch in this 2:30hrs Crash Course. This course is designed specially for new web developers, who just started to learn react js. In this course we will build a complete portfolio website using react
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
                    <img src={img1} className='img' alt='True'/>
                </div>

            </div>
        </div>
      
    </div>
  )
}
