import { useState } from 'react'
import './App.css'
import NavBar from './components/Header.jsx'
import FooterBar from './components/Footer.jsx'
import AboutMe from './components/AboutMe.jsx'
import Projects from './components/Projects.jsx'

function App() {
  

  return (
    <>
    
      <div>
        <NavBar/>
      </div>

      <div>
        <AboutMe/>
      </div>

      <div>
        <Projects/>
      </div>
     

     <div>
      <FooterBar/>
     </div>
    </>
  )
}

export default App
