import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './NavbarStyles.css'
import { FaBars, FaTimes } from 'react-icons/fa'
import LoadingBar from 'react-top-loading-bar'
export default function Navbar() {

  const [showHamburger, setHamburger] = useState(false);
  const handleHamburger = () => setHamburger(!showHamburger);
  const [progress, setProgress] = useState(0)

  const handleProgress=(progress)=>{
    setProgress(100);
    handleHamburger();
  }



  return (
    <>
      <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div className="header">
        <Link to="/">
          <h1 onClick={handleProgress} >Portfolio</h1>
        </Link>
        <ul className={showHamburger ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link onClick={handleProgress} to="/">
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link onClick={handleProgress} to="/project">Project</Link>
          </li>
          <li>
            <Link onClick={handleProgress} to="/about">About</Link>
          </li>
          <li>
            <Link onClick={handleProgress} to="/contact">Contact</Link>
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
