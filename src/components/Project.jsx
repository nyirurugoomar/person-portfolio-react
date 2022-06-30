import React from 'react'
import '../components/styles/project.css';
import projectImage from '../assets/projectImage.png'
import movieProject from '../assets/movieProject.png'
import myPortfolio from '../assets/myPortfolio.png'


function Project() {
  return (
    <section id="project">
        <div className="project container">
            <div>
                <div className="section-title">
                    <h1>Projects</h1>
                </div>
                
            </div>
            <div className="project-items">

                

                <div className="project-item">
                    
                    <div className="project-info">
                     <img src={movieProject} alt='projectImage'/>
                     <div className='project-button'>
                     <button className='ProjectBtn'>LIVE DEMO</button>
                     <button className='ProjectBtnGit'>Git</button>
                     </div>
                     
                     <h3>WATCH  MOVIES APP</h3>  
                     
                    </div>
                </div>

                <div className="project-item">
                    
                    <div className="project-info">
                     <img src={projectImage} alt='projectImage'/>
                     <div className='project-button'>
                     <button className='ProjectBtn'><a href='https://transcendent-speculoos-fc4b75.netlify.app/'> LIVE DEMO</a></button>
                     <button className='ProjectBtnGit'>Git</button>
                     </div>
                        <h3>ARTIFICIAL-I APP</h3>
                        
                    </div>

                    
                  
                </div>
                <div className="project-item">
                    
                    <div className="project-info">
                     <img src={myPortfolio} alt='projectImage'/>
                     <div className='project-button'>
                     <button className='ProjectBtn'><a href='https://nyirurugoomar.github.io/nyirurugo-omar/index.html'> LIVE DEMO</a></button>
                     <button className='ProjectBtnGit'>Git</button>
                     </div>
                        <h3>PERSONAL BLOG </h3>
                        
                    </div>
                </div>

            </div>
        </div>
{/* ----------------------------------------------------------------- */}
     </section>

    
  )
}

export default Project