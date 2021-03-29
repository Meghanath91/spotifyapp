import React from "react";
import { useSelector } from "react-redux"
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";

import Artist from "./Artist";

export default function DisplaySearchResults({ fetchmoreData, nextPage }) {
  const { artists, searchQuery } = useSelector((state) => state);
  console.log(searchQuery, "searchquery")
  const displayArtists = () => {
    return artists.map((artist) => {
      return (
        <Link
          to={`/${artist.id}`}
          key={artist.id}
          className="entity-link"
        ><Artist artist={artist} /></Link>
      );
    });
  };

  return (
    <div className="display-container">
      <InfiniteScroll
        dataLength={artists.length}
        next={fetchmoreData}
        loader={searchQuery !== '' ? (<h4>Loading...</h4>) : ''}
        hasMore={nextPage}
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
        {displayArtists()}
      </InfiniteScroll>
    </div>
  );
}