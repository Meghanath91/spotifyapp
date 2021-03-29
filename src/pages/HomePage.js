import React, { useState, useEffect, useContext } from "react";
import Axios from "axios";
import DisplaySearchResults from "../components/DisplaySearchResults";
import Login from "../components/Login";
import Search from "../components/Search";
import getUrlParams from "../config/getUrlParams";
import { TokenContext } from "../context/TokenContext";
import { useDispatch } from "react-redux";
import { setArtists } from "../redux/actions/artists";
export default function HomePage() {
  const dispatch = useDispatch();
  const [accessToken, setAccessToken] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  //using context to set a global state user
  const { setToken } = useContext(TokenContext);

  useEffect(() => {
    const token = getUrlParams();
    setToken(token);
    setAccessToken(token);
  }, [accessToken, setToken]);

  useEffect(() => {
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
    Axios.get(searchUrl, headers)
      .then((response) => {
        const results = response.data.artists.items;
        dispatch(setArtists(results));
        console.log(results);
      })
      .catch((err) => {
        console.log(err.response);
        // setError("Something went wrong");
      });
  }, [searchQuery, accessToken, dispatch]);

  return (
    <div>
      {accessToken ? (
        <div>
          {" "}
          <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <DisplaySearchResults accessToken={accessToken} />
        </div>
      ) : (
          <Login />
        )}
    </div>
  );
}
