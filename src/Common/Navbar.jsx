import React from 'react'
import "./Common.css"
import logo from "/images/logo.png"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} className='logo' alt="Lilian Amaka Okocha" />
      <nav>
        <Link to="">Home</Link>
        <Link to="">About</Link>
        <Link to="">Gallery</Link>
      </nav>
    </div>
  );
}

export default Navbar