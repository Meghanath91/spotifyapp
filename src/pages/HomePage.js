import React, { useState, useEffect, useContext } from "react";
import DisplaySearchResults from "../components/DisplaySearchResults";
import Login from "../components/Login";
import Search from "../components/Search";
import getUrlParams from "../helpers/getUrlParams";
import { TokenContext } from "../context/TokenContext";
import { useDispatch } from "react-redux";
import { setArtists } from "../redux/actions/artists";
import callApi from "../helpers/getArtists";

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
