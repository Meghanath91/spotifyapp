import React, { useState, useEffect } from "react";
import Axios from 'axios'
import DisplaySearchResults from "../components/DisplaySearchResults";
import Login from "../components/Login";
import Search from "../components/Search";
import getUrlParams from "../config/getUrlParams";

export default function Home() {

  const [accessToken, setAccessToken] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [artists, setArtists] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = getUrlParams();
    setAccessToken(token);
  }, [accessToken]);




  useEffect(() => {
    console.log(searchQuery);
    const searchUrl = `https://api.spotify.com/v1/search?query=${encodeURIComponent(
      searchQuery
    )}&type=artist`;
    const headers = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    };
    Axios
      .get(searchUrl, headers)
      .then((response) => {
        const results = response.data.artists.items;
        setArtists(results);
        console.log(results);
      })
      .catch((err) => {
        console.log(err.response);
        setError("Something went wrong");
      });
  }, [searchQuery, accessToken])

  return <div>{accessToken ? <div> <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} /><DisplaySearchResults artists={artists} /></div> : <Login />}</div>;
}
