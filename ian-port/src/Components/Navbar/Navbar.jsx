import React from 'react'
import './Navbar.css'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
    <h1 className='logo'><Link to="/"> Ian Canlas </Link></h1>
      <ul>
        <li><Link to="/aboutPage">About</Link></li>
        <li><Link to="/worksPage">Works</Link></li>
        <li><Link to="/projectsPage">Projects</Link></li>
        <li><Link to="/contactPage">Contact</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
