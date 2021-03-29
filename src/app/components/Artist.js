import React from "react";
import noImage from "../images/no-image.jpg";
import '../../App.css'
export default function Artist({ artist }) {
  console.log(artist, "details")
  return (
    <div className="artist-container">
      <img
        src={artist.images.length ? artist.images[0].url : noImage}
        alt={artist.name}
        width="200px"
        height="200px"
      />
      <h3>{artist.name}</h3>
      <p> {artist.followers.total} followers </p>
      <p>{artist.popularity}</p>
    </div>
  );
}
