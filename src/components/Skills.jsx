import React from 'react'
import '../components/styles/skills.css'
import reactlogo from '../assets/react logo.png'
import javascript from '../assets/javascript logo.png'
import typescript from '../assets/Typescriptlogo.png'
import htmlandcss from '../assets/html and css.png'

function Skills() {
  return (
      
     <div className='skills-section'>

       <div className='title-top'>
         <h1>Skills</h1>
       </div>
       <div className='skills-logo'>
       <div>
            <img src={reactlogo} alt='reactlogo'/> 
         </div>
         <div>
             <img src={javascript} alt='javascript'/>
         </div>
         <div>
            <img src={typescript} alt='typescript'/> 
         </div>
         <div>
             <img src={htmlandcss} alt='html and css'/>
         </div>
       </div>
       
     </div>





















    // <div className='title-top'>
      
        
    //     <div>
    //        <img src={reactlogo} alt='reactlogo'/> 
    //     </div>
    //     <div>
    //         <img src={javascript} alt='javascript'/>
    //     </div>
    //     <div>
    //        <img src={typescript} alt='typescript'/> 
    //     </div>
    //     <div>
    //         <img src={htmlandcss} alt='html and css'/>
    //     </div>
        
    // </div>
     
  )
}

export default Skills