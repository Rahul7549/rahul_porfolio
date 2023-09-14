import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './NavbarStyles.css'
import {FaBars, FaTimes} from 'react-icons/fa'

export default function Navbar() {

  const [showHamburger,setHamburger]=useState(false);
  const handleHamburger=()=>setHamburger(!showHamburger);
  
  const [headerColor,seHeaderColor]=useState(false);

  const scrollView=()=>{
    if(window.scrollY>=100){
      seHeaderColor(true);
    }else{
      seHeaderColor(false);
    }
  }

  window.addEventListener('scroll',scrollView);


  return (
    <>
     <div className="header">
      <Link to="/rahul_porfolio">
        <h1>Portfolio</h1>
      </Link>
      <ul className={showHamburger? "nav-menu active" :"nav-menu"}>
        <li>
            <Link to="/rahul_porfolio">Home</Link>
        </li>
        <li>
            <Link to="/project">Project</Link>
        </li>
        <li>
            <Link to="/about">About</Link>
        </li>
        <li>
            <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className='hamburger' onClick={handleHamburger}>
        {showHamburger ? 
        (<FaTimes size={20} style={{color:"#fff"}}/>):
        (<FaBars size={20}  style={{color:"#fff"}}/>)
        }
      </div>
      </div>

    </>
  )
}
