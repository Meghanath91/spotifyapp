import React from "react";
import { loginUrl } from "../config/spotifyConfig";
import logo from "../images/spotify.png";
import '../../App.css'
export default function Login() {
  return (
    <div className="login-container">
      <img src={logo} alt="logo" />
      <a href={loginUrl}>LOGIN</a>
    </div>
  );
}
