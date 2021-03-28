import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import { TokenContext } from "../context/TokenContext";
import Album from "../components/Album";
import InfiniteScroll from "react-infinite-scroll-component";
export default function ArtistPage() {
  let { id } = useParams();
  const { token } = useContext(TokenContext);
  const [albums, setAlbums] = useState([]);
  useEffect(() => {
    const url = `https://api.spotify.com/v1/artists/${id}/albums`;

    const headers = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    Axios.get(url, headers)
      .then((response) => {
        const results = response.data.items;

        setAlbums(results);
      })
      .catch((err) => {
        console.log(err.response);
        // setError("Something went wrong");
      });
  }, [id, token]);

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
      <h1>album</h1>
      <h3>Albums</h3>
      <div>
        <InfiniteScroll
          dataLength={albums.length}
          // next={fetchmoreData}
          loader={<h4>Loading...</h4>}
          // hasMore={true}
          height="60vh"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        // endMessage={
        //   <p style={{ textAlign: "center" }}>
        //     <b>That's it !!!</b>
        //   </p>
        // }
        >
          {displayAlbums()}
        </InfiniteScroll>
      </div>
    </div>
  );
}