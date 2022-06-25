import React,{useState} from 'react';
import Intro from './components/Intro';
import About from './components/About';
import Project from './components/Project';
import Skills from './components/Skills'
import './App.css'; 


function App() {

  return (
      <>
          <Intro/>
          <About/>
          <Project/>
          <Skills/>

      </>

    );
}

export default App;




