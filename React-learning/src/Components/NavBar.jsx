import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className='navbr'>
      <Link to="/">Home</Link> | {" "}
      <Link to="/about">About</Link> | {" "}
      <Link to="/contact">Contact</Link>
    </div>
  )
}

export default NavBar
