import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Slider from './components/Slider'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import ProfileCard from './components/ProfileCard'
import LoginStatus from './components/LoginStatus'

function App() {
  const user = {
    name: "John Doe",
    age: "35",
    bio: 'Lorem ipsum dolor sit amet consecteturadipisicing elit.'
  }
  
  return (
    <>
      <Navbar />
      <Slider />
      <MainContent />
      <Footer />
      <LoginStatus />
      <div>
        <h2>User Profile</h2>
        <ProfileCard name={user.name} age={user.age} bio={user.bio} />
      </div>
    </>
  )
}

export default App
