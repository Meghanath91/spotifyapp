import React from "react";
import { useSelector } from "react-redux"
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";
import Artist from "./Artist";

/**
* @func DisplaySearchResults
* @param {func} fetchmoreData 
* @param {string} nextPage
* @return {HTML}
*/
export default function DisplaySearchResults({ fetchmoreData, nextPage }) {
  const { artists, searchQuery } = useSelector((state) => state);
  /**
  * @func displayArtists
  * @return {HTML}
  */
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
        className="scroll-container"
        dataLength={artists.length}
        next={fetchmoreData}
        loader={searchQuery !== '' ? (<h4>Loading...</h4>) : ''}
        hasMore={nextPage}
        height="60vh"
      >
        {displayArtists()}
      </InfiniteScroll>
    </div>
  );
}
