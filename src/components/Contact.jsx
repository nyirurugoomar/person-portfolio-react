import React from 'react'
import '../components/styles/contact.css'


function Contact() {
  return (
    <div>
        <div className="contact-container">

            <div className='contact-title'>
                <h1>Contact</h1>
                <p>Get in touch</p>
            </div>

            <div className='contactSection__wrapper'>
                <div className='left'>
                    <div className='icon'></div>
                </div>
                <div className='right'>
                    contactForm
                </div>

            </div>

        </div>
    </div>
  )
}

export default Contact