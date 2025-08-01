import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Home from './Components/Home'
import About from './Components/About'
import Footer from './Components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Contact from './Components/Contact'
import User from './Components/User'
import Github from './Components/Github'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Home />
      <About />
      <Contact />
      <User />
      <Github />
      <Router />
      <Footer />
    </>
  )
}

export default App
