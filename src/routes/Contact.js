import React from 'react'
import Navbar from '../components/navBar/Navbar'
import BackGroundImg from '../components/background-image/BackGroundImg'
import Footer from '../components/footer/Footer'
import ContactForm from '../components/contact-content/ContactForm'
export default function Contact() {
  document.title='Contact';
  return (
    <div>
       <BackGroundImg heading="CONTACT."
       text="Let's have chat !"/>
       <ContactForm/>
       <Footer/>
    </div>
  )
}
