import './FooterStyle.css'
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaLinkedin, FaInstagram, } from 'react-icons/fa'

export default function Footer() {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='left'>
          <div className='location'>

            <FaHome size={20}
              style={{ color: "#fff", marginRight: "2rem" }} />
            <p>NFC, Taimoor Nagar, Delhi, 110025, India</p>

          </div>

          <div className='phone'>
            <h4>
              <FaPhone size={20}
                style={{ color: "#fff", marginRight: "2rem" }} />
              <span style={{ marginRight: "1px" }}>+91</span> <span style={{ marginLeft: "1px" }}>9110056292</span>
            </h4>
          </div>
          <div className='email'>
            <h4>
              <FaMailBulk size={20}
                style={{ color: "#fff", marginRight: "2rem" }} />
              Rksharma15700@gmail.com
            </h4>
          </div>
        </div>
        <div className='right'>
          <h4>About Me</h4>
          <p>
            Results-driven Software Developer with 2+ years of hands-on experience in dynamic web applications using
            Angular. Proficient in full-stack development, specializing in Node.js, PostgreSQL, and React.js. Proven track
            record of delivering high-quality solutions on time through effective collaboration with cross-functional
            teams
          </p>
          <div className='social'>
            <a target='#' href='https://www.facebook.com/profile.php?id=100091796851448'>
              <FaFacebook size={30}
                style={{ color: "#fff", marginRight: "1rem" }} />
            </a>

            <a target='#' href='https://www.linkedin.com/in/rahul-kumar-sharma-9bb998196/'>
              <FaLinkedin size={30}
                style={{ color: "#fff", marginRight: "1rem", cursor: "pointer" }} />
            </a>

            <a target='#' href='https://www.instagram.com/accounts/onetap/?next=%2Frksharma15700%2F'>
              <FaInstagram size={30}
                style={{ color: "#fff", marginRight: "1rem" }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
