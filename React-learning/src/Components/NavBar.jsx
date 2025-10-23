import React from 'react'
import './NavBar.css'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <header className="nav-wrapper" role="banner">
      <nav className="nav" role="navigation" aria-label="Main navigation">
        <div className="nav__brand">
          <NavLink to="/" className="nav__logo" aria-label="Home">
            <span className="nav__logo-mark">SK</span>
            <span className="nav__logo-text">Pravin</span>
          </NavLink>
        </div>

        <ul className="nav__list">
          <li className="nav__item">
            <NavLink to="/" end className={({ isActive }) => isActive ? 'nav__link active' : 'nav__link'}>
              Home
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/about" className={({ isActive }) => isActive ? 'nav__link active' : 'nav__link'}>
              About
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav__link active' : 'nav__link'}>
              Contact
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/Effect" className={({ isActive }) => isActive ? 'nav__link active' : 'nav__link'}>
              Effect
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar
