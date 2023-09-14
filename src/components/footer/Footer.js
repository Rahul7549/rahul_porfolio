import './FooterStyle.css'
import {FaHome,FaPhone,FaMailBulk, FaFacebook, FaLinkedin, FaInstagram,} from 'react-icons/fa'

export default function Footer() {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='left'>
            <div className='location'>
              
              <FaHome size={20}
                 style={{color:"#fff",marginRight:"2rem"}}/> 
              <p>Dwarka Nagar, Bagalur Cross, Bengalore, 560064, India</p>
              
            </div>

            <div className='phone'>
                <h4>
                <FaPhone size={20}
                 style={{color:"#fff",marginRight:"2rem"}}/>
                <span style={{marginRight:"1px"}}>+91</span> <span style={{marginLeft:"1px"}}>9110056292</span>
                </h4>
            </div>
            <div className='email'>
                <h4>
                <FaMailBulk size={20}
                 style={{color:"#fff",marginRight:"2rem"}}/>
                Rksharma15700@gmail.com
                </h4>
            </div>
        </div>
        <div className='right'>
            <h4>About Me</h4>
            <p>
            Enthusiastic developer eager to contribute to team success through hard work, attention to detail and excellent
            organizational skills. Motivated to learn new technologies grow and excel in the industry.
            </p>
            <div className='social'>
              <a target='#' href='https://www.facebook.com/profile.php?id=100091796851448'>
              <FaFacebook size={30}
              style={{color:"#fff",marginRight:"1rem"}}/>
              </a>
              
            <a target='#' href='https://www.linkedin.com/in/rahul-kumar-sharma-9bb998196/'>
            <FaLinkedin size={30}
              style={{color:"#fff",marginRight:"1rem",cursor:"pointer"}}/>
            </a>

            <a target='#' href='https://www.instagram.com/accounts/onetap/?next=%2Frksharma15700%2F'>
            <FaInstagram size={30}
              style={{color:"#fff",marginRight:"1rem"}}/>
            </a>
            </div>
        </div>
      </div>
    </div>
  )
}
