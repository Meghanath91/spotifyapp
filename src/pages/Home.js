import React, { useState, useEffect, useContext } from "react";
import Axios from "axios";
import DisplaySearchResults from "../components/DisplaySearchResults";
import Login from "../components/Login";
import Search from "../components/Search";
import getUrlParams from "../config/getUrlParams";
import { TokenContext } from "../context/TokenContext"
export default function Home() {
  const [accessToken, setAccessToken] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [artists, setArtists] = useState([]);
  // const [error, setError] = useState("");

  //using context to set a global state user
  const { token, setToken } = useContext(TokenContext);

  console.log(token, "token===========>")

  useEffect(() => {
    const token = getUrlParams();
    setToken(token)
    setAccessToken(token);
  }, [accessToken, setToken]);

  useEffect(() => {

    const searchUrl = `https://api.spotify.com/v1/search?query=${encodeURIComponent(
      searchQuery
    )}&type=artist`;

    const headers = {
      headers: {
        'Accept': "application/json",
        "Content-Type": "application/json",
        'Authorization': `Bearer ${accessToken}`,
      },
    };
    Axios.get(searchUrl, headers)
      .then((response) => {
        const results = response.data.artists.items;
        // const next = response.data;
        setArtists(results);
        // console.log(next);
      })
      .catch((err) => {
        console.log(err.response);
        // setError("Something went wrong");
      });
  }, [searchQuery, accessToken]);

  return (
    <div>
      {accessToken ? (
        <div>
          {" "}
          <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <DisplaySearchResults
            artists={artists}
            accessToken={accessToken}
          // fetchmoreData={fetchMoreData}
          />
        </div>
      ) : (
          <Login />
        )}
    </div>
  );
}
