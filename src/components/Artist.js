import React from "react";
import noImage from '../images/no-image.jpg'
export default function Artist({ artist }) {
  return (
    <div>
      <img src={artist.images.length ? artist.images[0].url : noImage} alt={artist.name} width="200px" height="200px" />
      <p>{artist.name}</p>
      <p>{artist.followers.total}</p>
      <p>{artist.popularity}</p>
    </div>
  );
}
