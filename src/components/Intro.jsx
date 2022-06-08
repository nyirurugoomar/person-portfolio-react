import React, { useEffect,useRef } from 'react'
import '../components/styles/main.css'
import {init} from 'ityped'

function Intro() {

    const textRef =useRef();

    useEffect(()=>{
   init(textRef.current, {
       showCursor:false,
       backDelay:1500,
       strings:['Frontend ','UI/UX ']
   })
    },[])
  return (
    <div className='intro' id='intro'>
        <div className='left'>
            <div className='ImgContainer'>
                <img src='assets/profile.png' alt='Profile'/>
            </div>
        </div>
        <div className='right'>
             <div className='wrapper'>
                 <h2>Hi There, I'm</h2>
                 <h1>Omar Nyirurugo</h1>
                 <h3><span ref={textRef}> </span>Developer</h3>
             </div>
             <a href='#portfolio'>
                 <img src='' alt=''/>
             </a>
        </div>
    </div>
  )
}

export default Intro