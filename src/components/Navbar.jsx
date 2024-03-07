import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <> 
      <nav>
        <div className="logo">
            <img src="../public/images/logo.png" alt="" />
        </div>
        <div className="navbar">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Page</li>
            </ul>
        </div>
        <button>Login</button>
      </nav>
    </>
  )
}

export default Navbar
