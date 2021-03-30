import React from 'react'
import logo from '../images/spotify.png'
import { useHistory } from "react-router-dom";
import '../../App.css'
export default function Navbar() {
  const history = useHistory();
  const handleClick = () => {
    history.push('/');
  }
  return (
    <nav className="navbar">
      <div onClick={handleClick} className="logo-container">
        <img src={logo} alt="logo" />
        <h3>Spotify Artist Search</h3>
      </div>
    </nav>
  )
}
