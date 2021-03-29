import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";

import { TokenContext } from "../context/TokenContext";
import Album from "../components/Album";
import { setAlbums } from "../redux/actions/albums";
import callApi from "../helpers/getAlbums";

export default function ArtistPage() {
  const { albums } = useSelector((state) => state);
  let { id } = useParams();
  const dispatch = useDispatch();
  const { token } = useContext(TokenContext);

  useEffect(() => {
    callApi(id, token)
      .then(async (response) => {
        const results = await response.data.items;
        dispatch(setAlbums(results));
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
