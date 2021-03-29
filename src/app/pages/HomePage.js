import React, { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../App.css";
import DisplaySearchResults from "../components/DisplaySearchResults";
import Login from "../components/Login";
import Search from "../components/Search";
import getUrlParams from "../helpers/getUrlParams";
import callApi from "../helpers/getArtists";
import { TokenContext } from "../context/TokenContext";
import { setArtists, loadMoreArtists } from "../redux/actions/artists";
import { setSearchQuery } from "../redux/actions/search";

export default function HomePage() {
  const [accessToken, setAccessToken] = useState(null);
  const [nextPage, setNextPage] = useState("");
  const dispatch = useDispatch();
  //using context to set a global state user
  const { setToken } = useContext(TokenContext);
  const { searchQuery } = useSelector((state) => state);
  const fetchmoreData = () => {
    callApi(nextPage, accessToken)
      .then(async (response) => {
        const results = await response.data.artists.items;
        const next = await response.data.artists.next;
        dispatch(loadMoreArtists(results));
        setNextPage(next);
      })
      .catch((err) => {
        console.log(err.response);
        // setError("Something went wrong");
      });
  };

  useEffect(() => {
    const token = getUrlParams();
    setToken(token);
    setAccessToken(token);
  }, [accessToken, setToken]);

  useEffect(() => {
    callApi(searchQuery, accessToken)
      .then(async (response) => {
        const results = await response.data.artists.items;
        const next = await response.data.artists.next;

        dispatch(setArtists(results));
        setNextPage(next);
      })
      .catch((err) => {
        console.log(err.response);
        // setError("Something went wrong");
      });
  }, [searchQuery, accessToken, dispatch]);

  return (
    <div className="home-container">
      {accessToken ? (
        <div className="search-display-container">
          <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <br />
          <DisplaySearchResults fetchmoreData={fetchmoreData} nextPage={true} />
        </div>
      ) : (
          <Login />
        )}
    </div>
  );
}
