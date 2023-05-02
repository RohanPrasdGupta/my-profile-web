
import './App.css';
import { Home } from './Home';
import { Navbar } from './Navbar';
import { About } from './About';
import { Experience } from './Experience';
import { Achievements } from './Achievements';
import { Projects } from './Projects';
import { Contact } from './Contact';



import React,{useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); //weather dark mode is enable or not
  
  const toggleMode = ()=>{
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      
    } 
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
    }

  }

  return (
  <>
  <Router>
  <Navbar mode = {mode} toggleMode={toggleMode} />
  
  
  <Routes>
          <Route path='/' element = {<Home />} />
          <Route path='/about' element = {<About />} />
          <Route path='/experience' element = {<Experience />} />
          <Route path='/achievements' element = {<Achievements />} />
          <Route path='/projects' element = {<Projects />} />
          <Route path='/contact' element = {<Contact />} />
         
    </Routes>
  </Router>
  </>
  );
}

export default App;
