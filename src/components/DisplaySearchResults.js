import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";
import Artist from "./Artist";

export default function DisplaySearchResults({ artists, fetchmoreData, accessToken }) {

  const displayArtists = () => {
    // console.log(accessToken, "==========>")
    return artists.map((artist) => {
      return (
        <Link
          to={`/${artist.id}/${accessToken}`}
          key={artist.id}
          className="entity-link"
        ><Artist artist={artist} /></Link>
      );
    });
  };

  return (
    <div>
      <InfiniteScroll
        dataLength={artists.length}
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
        {displayArtists()}
      </InfiniteScroll>
    </div>
  );
}
