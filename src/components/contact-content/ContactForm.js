import './ContactFormStyles.css'
import { useRef } from 'react'
import emailjs from '@emailjs/browser';

import React from 'react'

export default function ContactFrom() {
  
  const form=useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_obexnmf', 'template_oj3mctp', form.current, 'LDoVZIrVca016jg9i')
      .then((result) => {
          console.log(result.text);
          alert("Email has been send successfully")
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <div className='form'>
      <form ref={form} onSubmit={sendEmail}>
        <label>Your Name</label>
        <input type='text' name='user_name'/>
        <label>Email</label>
        <input type='email' name='user_email'/>
        <label>Phone</label>
        <input type='text' name='user_mobile'/>
        <label>Subject</label>
        <input type='text' name='subject'/>
        <label>Message</label>
        <textarea rows="6" name='message' placeholder='Type your message here'/>
        <button className='btn'>SUBMIT</button>
      </form>
      
    </div>
  )
}
