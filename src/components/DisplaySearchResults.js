import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";
import Artist from "./Artist";

export default function DisplaySearchResults({ artists }) {
  // const [characters, setCharacters] = useState([]);
  // const [nextPage, setNextPage] = useState(1);

  // const fetchMoreData = () => {
  //   if (data) {
  //     setNextPage(data.characters.info.next);
  //     setCharacters([...characters, ...data.characters.results]);
  //   }
  // };
  const displayArtists = () => {
    console.log(artists, "in display")
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
    <div>
      <InfiniteScroll
        dataLength={artists.length}
        next={true}
        loader={<h4>Loading...</h4>}
        hasMore={2}
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
