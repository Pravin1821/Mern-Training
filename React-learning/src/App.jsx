import { useState, useEffect } from 'react'
import './App.css'
import Prop from './Components/Prop'
import { BrowserRouter as Router, Route, Routes, BrowserRouter , Link} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import NavBar from './Components/NavBar'
import Effect from './Hooks/effect'



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
        <Route path='/contact' element={<Contact />} />
        <Route path='/Effect' element={<Effect />} />
      </Routes>     
    </BrowserRouter>
  )
}

export default App