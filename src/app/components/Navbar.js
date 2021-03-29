import React from 'react'
import logo from '../images/spotify.png'
import '../../App.css'
export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" />
      <h3>Spotify Artist Search</h3>
    </nav>
  )
}
