import React, { useState, useEffect, useContext } from "react";
import { useDispatch } from "react-redux";

import DisplaySearchResults from "../components/DisplaySearchResults";
import Login from "../components/Login";
import Search from "../components/Search";
import getUrlParams from "../helpers/getUrlParams";
import callApi from "../helpers/getArtists";
import { TokenContext } from "../context/TokenContext";
import { setArtists } from "../redux/actions/artists";

export default function HomePage() {
  const [accessToken, setAccessToken] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  //using context to set a global state user
  const { setToken } = useContext(TokenContext);

  useEffect(() => {
    const token = getUrlParams();
    setToken(token);
    setAccessToken(token);
  }, [accessToken, setToken]);

  useEffect(() => {
    callApi(searchQuery, accessToken)
      .then(async (response) => {
        const results = await response.data.artists.items;
        dispatch(setArtists(results));
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
          <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <br />
          <DisplaySearchResults accessToken={accessToken} />
        </div>
      ) : (
          <Login />
        )}
    </div>
  );
}
