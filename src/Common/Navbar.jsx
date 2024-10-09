import React, { useState } from "react";
import "./Common.css";
import logo from "/images/logo.png";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineCancel } from "react-icons/md";

const Navbar = () => {
const [navbar, setNavbar] = useState(false)
  return (
    <div className="navbar">
      <img src={logo} className="logo" alt="Lilian Amaka Okocha" />
      {navbar ? (
        <MdOutlineCancel
          className="navbarIcon"
          onClick={() => setNavbar(false)}
        />
      ) : (
        <GiHamburgerMenu
          className="navbarIcon"
          onClick={() => setNavbar(true)}
        />
      )}

      <nav className={`${!navbar && "hidden_nav"}`}>
        <Link to="">Home</Link>
        <Link to="">About</Link>
        <Link to="">Gallery</Link>
      </nav>
    </div>
  );
};

export default Navbar;
