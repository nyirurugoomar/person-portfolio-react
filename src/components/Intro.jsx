import React from 'react'
import '../components/styles/main.css'

function Intro() {
  return (
    <div className='intro' id='intro'>
        <div className='left'>
            <div className='ImgContainer'>
                <img src='assets/profile.png' alt='Profile'/>
            </div>
        </div>
        <div className='right'>
             <div className='wrapper'>
                 <h2>Hi There I'm</h2>
                 <h1>Omar Nyirurugo</h1>
                 <h3>Frontend Developer</h3>
             </div>
        </div>
    </div>
  )
}

export default Intro