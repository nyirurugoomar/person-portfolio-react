import React from 'react'
import '../components/styles/project.css';
import projectImage from '../assets/projectImage.png'


function Project() {
  return (
    <section id="contact">
        <div className="contact container">
            <div>
                <div className="section-title">
                    <h1>Projects</h1>
                </div>
                
            </div>
            <div className="contact-items">

                

                <div className="contact-item">
                    
                    <div className="contact-info">
                     <img src={projectImage} alt='projectImage'/>
                     <p>PHONEPHONEPHONEPHOHONEPHONE</p>  
                     
                    </div>
                </div>

                <div className="contact-item">
                    
                    <div className="contact-info">
                     <img src={projectImage} alt='projectImage'/>
                        <p>PHONEPHONEPHONEPHOHONEPHONE</p>
                        
                    </div>

                    
                  
                </div>
                <div className="contact-item">
                    
                    <div className="contact-info">
                     <img src={projectImage} alt='projectImage'/>
                        <p>PHONEPHONEPHONEPHOHONEPHONE</p>
                        
                    </div>
                </div>

            </div>
        </div>
{/* ----------------------------------------------------------------- */}
     </section>

    
  )
}

export default Project