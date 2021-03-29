import React, { useState, useEffect, useContext } from "react";
import { useDispatch } from "react-redux";

import DisplaySearchResults from "../components/DisplaySearchResults";
import Login from "../components/Login";
import Search from "../components/Search";
import getUrlParams from "../helpers/getUrlParams";
import callApi from "../helpers/getArtists";
import { TokenContext } from "../context/TokenContext";
import { setArtists, loadMoreArtists } from "../redux/actions/artists";
import axios from "axios";

export default function HomePage() {
  const [accessToken, setAccessToken] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [nextPage, setNextPage] = useState("");
  const dispatch = useDispatch();
  //using context to set a global state user
  const { setToken } = useContext(TokenContext);

  const fetchmoreData = () => {
    const headers = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    };
    axios
      .get(nextPage, headers)
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
    <div>
      {accessToken ? (
        <div>
          <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <br />
          <DisplaySearchResults
            fetchmoreData={fetchmoreData}
            nextPage={true}
          />
        </div>
      ) : (
          <Login />
        )}
    </div>
  );
}
