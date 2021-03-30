import React, { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../App.css";
import DisplaySearchResults from "../components/DisplaySearchResults";
import Login from "../components/Login";
import Search from "../components/Search";
import getUrlParams from "../helpers/getUrlParams";
import callApi from "../config/callApi";
import { TokenContext } from "../context/TokenContext";
import { setArtists, loadMoreArtists } from "../redux/actions/artists";
import { setSearchQuery } from "../redux/actions/search";
import Error from "../components/Error";

/**
 * @func HomePage
 * @return {HTML}
 */
export default function HomePage() {
  const [accessToken, setAccessToken] = useState(null);
  const [nextPage, setNextPage] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  //using context to set a global state user
  const { setToken } = useContext(TokenContext);
  const { searchQuery } = useSelector((state) => state);

  /**
   * @func fetchmoreData
   * @return {undefined}
   */
  const fetchmoreData = () => {
    //middleware to call spotify api
    callApi(nextPage, accessToken)
      .then(async (response) => {
        const results = await response.data.artists.items;
        const next = await response.data.artists.next;
        dispatch(loadMoreArtists(results));
        setNextPage(next);
      })
      .catch((err) => {
        const errorMessage = err.response.data.error.message;
        if (errorMessage === "The access token expired")
          setError("Your session expired please sign in");

      });
  };

  //useEffect to mount accessToken
  useEffect(() => {
    setError(null)
    const token = getUrlParams();
    setToken(token);
    setAccessToken(token);
  }, [accessToken, setToken]);

  //useEffect to mount list of artists
  useEffect(() => {
    setError(null)
    const searchUrl = `https://api.spotify.com/v1/search?query=${encodeURIComponent(
      searchQuery
    )}&type=artist`;

    //middleware to call spotify api
    callApi(searchUrl, accessToken)
      .then(async (response) => {
        const results = await response.data.artists.items;
        const next = await response.data.artists.next;

        dispatch(setArtists(results));
        setNextPage(next);
      })
      .catch((err) => {
        const errorMessage = err.response.data.error.message;
        if (errorMessage === "The access token expired")
          setError("Your session expired please sign in");

      });
  }, [searchQuery, accessToken, dispatch]);

  return (
    <div className="home-container">
      {accessToken ? (
        <div className="search-display-container">
          <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <br />
          {error ? (
            <div>
              <Error error={error} />
            </div>
          ) : (
              <DisplaySearchResults
                fetchmoreData={fetchmoreData}
                nextPage={true}
              />
            )}
        </div>
      ) : (
          <Login />
        )}
    </div>
  );
}
