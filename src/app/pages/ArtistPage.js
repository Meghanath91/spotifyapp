import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";

import { TokenContext } from "../context/TokenContext";
import Album from "../components/Album";
import { loadMoreAlbums, setAlbums } from "../redux/actions/albums";
import callApi from "../config/callApi";
import Error from "../components/Error";

/**
 * @func ArtistsPage
 * @return {HTML}
 */
export default function ArtistPage() {
  const { albums } = useSelector((state) => state);
  let { id } = useParams();
  const dispatch = useDispatch();
  const { token } = useContext(TokenContext);
  const [nextPage, setNextPage] = useState("");
  const [artist, setArtist] = useState("");
  const [error, setError] = useState("");

  /**
   * @func fetchmoreData
   * @return {undefined}
   */
  const fetchmoreData = () => {
    //middleware to call spotify api
    callApi(nextPage, token)
      .then(async (response) => {
        const results = await response.data.items;
        const next = await response.data.next;
        dispatch(loadMoreAlbums(results));
        setNextPage(next);
      })
      .catch((err) => {
        const errorMessage = err.response.data.error.message;
        if (errorMessage === "The access token expired")
          setError("Your session expired please sign in");
        else setError("Something went wrong, Please refresh");
      });
  };

  //useEffect to mount collection of albums
  useEffect(() => {
    const url = `https://api.spotify.com/v1/artists/${id}/albums`;
    //middleware to call spotify api
    callApi(url, token)
      .then(async (response) => {
        const results = await response.data.items;
        const fetchArtist = await results[0].artists[0].name;
        const next = await response.data.next;
        setArtist(fetchArtist);
        dispatch(setAlbums(results));
        setNextPage(next);
      })
      .catch((err) => {
        const errorMessage = err.response.data.error.message;
        if (errorMessage === "The access token expired")
          setError("Your session expired please sign in");
        else setError("Something went wrong, Please refresh");
      });
  }, [id, token, dispatch]);

  const displayAlbums = () => {
    return albums.map((album) => {
      return (
        <div key={album.id}>
          <Album album={album} />
        </div>
      );
    });
  };
  return (
    <div className="artist-page-conatainer">
      <div className="title-container">
        <h1>{artist}</h1>
        <h3>Albums</h3>
      </div>
      <div>
        {error ? (
          <Error error={error} />
        ) : (
            <InfiniteScroll
              dataLength={albums.length}
              next={fetchmoreData}
              loader={<h4>Loading...</h4>}
              hasMore={true}
              height="60vh"
              className="scroll-container"
              endMessage={
                <p style={{ textAlign: "center" }}>
                  <b>That's it !!!</b>
                </p>
              }
            >
              {displayAlbums()}
            </InfiniteScroll>
          )}
      </div>
    </div>
  );
}
