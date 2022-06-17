import React from 'react'
import '../components/styles/project.css';
import projectImage from '../assets/projectImage.png'


function Project() {
  return (
    <section id="contact">
        <div class="contact container">
            <div>
                <h1 class="section-title">Projects</h1>
                
            </div>
            <div class="contact-items">

                

                <div class="contact-item">
                    <div class="icon"></div>
                    <div class="contact-info">
                    <img src={projectImage}/>
                    <p>PHONEPHONEPHONEPHOHONEPHONE</p>
                        
                    </div>
                </div>

                <div class="contact-item">
                    <div class="icon"></div>
                    <div class="contact-info">
                     <img src={projectImage}/>
                        <p>PHONEPHONEPHONEPHOHONEPHONE</p>
                        
                    </div>
                <div/>    
                </div><div class="contact-item">
                    <div class="icon"></div>
                    <div class="contact-info">
                     <img src={projectImage}/>
                        <p>PHONEPHONEPHONEPHOHONEPHONE</p>
                        
                    </div>
                </div>

            </div>
        </div>
{/* ----------------------------------------------------------------- */}
     <div className="project2">

        <div class="contact container">
            
            <div class="contact-items">

                <div class="contact-item">
                    <div class="icon"></div>
                    <div class="contact-info">
                    <img src={projectImage}/>
                    <p>PHONEPHONEPHONEPHOHONEPHONE</p>
                        
                    </div>
                </div>

                <div class="contact-item">
                    <div class="icon"></div>
                    <div class="contact-info">
                     <img src={projectImage}/>
                        <p>PHONEPHONEPHONEPHOHONEPHONE</p>
                        
                    </div>
                <div/>    
                </div><div class="contact-item">
                    <div class="icon"></div>
                    <div class="contact-info">
                     <img src={projectImage}/>
                        <p>PHONEPHONEPHONEPHOHONEPHONE</p>
                        
                    </div>
                </div>

            </div>
        </div>
      </div>

    </section>

    
  )
}

export default Project