import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";

import { TokenContext } from "../context/TokenContext";
import Album from "../components/Album";
import { loadMoreAlbums, setAlbums } from "../redux/actions/albums";
import callApi from "../helpers/getAlbums";
import axios from "axios";

export default function ArtistPage() {
  const { albums } = useSelector((state) => state);
  let { id } = useParams();
  const dispatch = useDispatch();
  const { token } = useContext(TokenContext);
  const [nextPage, setNextPage] = useState("");

  const fetchmoreData = () => {
    const headers = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .get(nextPage, headers)
      .then(async (response) => {
        const results = await response.data.items;
        const next = await response.data.next;
        console.log(next, results);
        dispatch(loadMoreAlbums(results));
        setNextPage(next);
      })
      .catch((err) => {
        console.log(err.response);
        // setError("Something went wrong");
      });
  };

  useEffect(() => {
    callApi(id, token)
      .then(async (response) => {
        const results = await response.data.items;
        const next = await response.data.next;
        dispatch(setAlbums(results));
        setNextPage(next);
      })
      .catch((err) => {
        console.log(err.response);
        // setError("Something went wrong");
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
    <div>
      <h1>artist's Name</h1>
      <h3>Albums</h3>
      <div>
        <InfiniteScroll
          dataLength={albums.length}
          next={fetchmoreData}
          loader={<h4>Loading...</h4>}
          hasMore={true}
          height="60vh"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>That's it !!!</b>
            </p>
          }
        >
          {displayAlbums()}
        </InfiniteScroll>
      </div>
    </div>
  );
}
