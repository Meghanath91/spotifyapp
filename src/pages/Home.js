import React, { useState, useEffect } from "react";
import Login from "../components/Login";
import getUrlParams from "../config/getUrlParams";

export default function Home() {

  const [accessToken, setAccessToken] = useState(null);
  useEffect(() => {
    const token = getUrlParams();
    setAccessToken(token);
  }, [accessToken]);


  return <div>{accessToken ? <div> iam in home</div> : <Login />}</div>;
}
