import React from "react";
import { loginUrl } from "../config/spotifyConfig";
import logo from "../images/spotify.png";
export default function Login() {
  return (
    <div>
      <img src={logo} alt="logo" />
      <a href={loginUrl}>LOGIN</a>
    </div>
  );
}
