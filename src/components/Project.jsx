import React from 'react'
import '../components/styles/project.css';


function Project() {
  return (
    <section id="contact">
        <div class="contact container">
            <div>
                <h1 class="section-title">contact <span>INFO</span></h1>
            </div>
            <div class="contact-items">

                <div class="contact-item">
                    <div class="icon"><img src="https://img.icons8.com/ultraviolet/40/000000/phone.png" /></div>
                    <div class="contact-info">
                        <h1>PHONE</h1>
                        <h2>+250-784-418-127</h2>
                    </div>
                </div>

                <div class="contact-item">
                    <div class="icon"><img src="https://img.icons8.com/office/64/000000/email.png" /></div>
                    <div class="contact-info">
                        <h1>EMAIL</h1>
                        <h2>nyirurugoomar@gmail.com</h2>
                    </div>
                </div>

                <div class="contact-item">
                    <div class="icon"><img src="https://img.icons8.com/ultraviolet/40/000000/address.png" /></div>
                    <div class="contact-info">
                        <h1>ADDRESS</h1>
                        <h2>KG 238st </h2>
                    </div>
                </div>



            </div>
        </div>

    </section>
  )
}

export default Project