import React from 'react'
import '../components/styles/contact.css'
import contactImage from '../assets/contactImage.png'


function Contact() {
  return (
    <div>
        <div className="contact-container">

            <div className='contact-title'>
                <h1>Contact</h1>
                
            </div>

            <div className='contactSection__wrapper'>
                <div className='left'>
                  <label className='i-text'>Email address</label>
                  <br></br>
                  <a href='mailto:nyirurugoomar@gmail.com'>nyirurugoomar@gmail.com</a>
                  <br></br>
                  
                  <label className='i-text'>Phone number</label>
                  <h1 className='contact-text'>+(250)784 418 127</h1>
                  
                  <label className='i-text'>Address</label>
                  
                  <h1 className='contact-text'>Kigali,KG 238st</h1>
                    
                </div>
                <div className='right'>
                    <img src={contactImage} alt='contact img'/>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Contact