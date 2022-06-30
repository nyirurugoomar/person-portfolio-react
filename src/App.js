import React,{useState} from 'react';
import Intro from './components/Intro';
import About from './components/About';
import Project from './components/Project';
import Skills from './components/Skills'
import Contact from './components/Contact'
import './App.css'; 


function App() {

  return (
      <>
      <div className='webApp'>
      <Intro/>
          <About/>
          <Project/>
          <Skills/>
          <Contact/>
      </div>
      </>

    );
}

export default App;




