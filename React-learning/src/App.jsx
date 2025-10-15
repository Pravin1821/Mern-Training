import { useState, useEffect } from 'react'
import './App.css'
import Prop from './Components/Prop'
import { BrowserRouter as Router, Route, Routes, BrowserRouter , Link} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import NavBar from './Components/NavBar'

function App() {
  useEffect(() => {
    document.title = 'Pravin | Web Developer'
  }, [])

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App