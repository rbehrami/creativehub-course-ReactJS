import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import HeroSlider from './components/HeroSlider'
import Services from './components/Services'
import Content1 from './components/Content1'
import Content2 from './components/Content2'

function App() {
  return(
    <>
     <NavBar />
     <HeroSlider />
     <Services />    
     <Content1 />
     <Content2 />
    </>
  )
}

export default App
