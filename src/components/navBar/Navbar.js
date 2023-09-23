import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './NavbarStyles.css'
import { FaBars, FaTimes } from 'react-icons/fa'
import LoadingBar from 'react-top-loading-bar'
export default function Navbar() {

  const [showHamburger, setHamburger] = useState(false);
  const handleHamburger = () => setHamburger(!showHamburger);
  const [progress, setProgress] = useState(0)
  const [headerColor, seHeaderColor] = useState(false);

  const scrollView = () => {
    if (window.scrollY >= 100) {
      seHeaderColor(true);
    } else {
      seHeaderColor(false);
    }
  }

  const handleProgress=(progress)=>{
    setProgress(100);
    handleHamburger();
  }

  window.addEventListener('scroll', scrollView);


  return (
    <>
      <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div className="header">
        <Link to="/rahul_portfolio">
          <h1 onClick={handleProgress} >Portfolio</h1>
        </Link>
        <ul className={showHamburger ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link onClick={handleProgress} to="/rahul_portfolio">
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link onClick={handleProgress} to="/rahul_portfolio/project">Project</Link>
          </li>
          <li>
            <Link onClick={handleProgress} to="/rahul_portfolio/about">About</Link>
          </li>
          <li>
            <Link onClick={handleProgress} to="/rahul_portfolio/contact">Contact</Link>
          </li>
        </ul>
        <div className='hamburger' onClick={handleHamburger}>
          {showHamburger ?
            (<FaTimes size={20} style={{ color: "#fff" }} />) :
            (<FaBars size={20} style={{ color: "#fff" }} />)
          }
        </div>
      </div>

    </>
  )
}
