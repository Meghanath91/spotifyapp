import React from "react";

export default function Artist({ artist }) {

  return (
    <div>
      <img src={artist.images[0].url} alt={artist.name} />
      <p>{artist.name}</p>
      <p>{artist.followers.total}</p>
      <p>{artist.popularity}</p>
    </div>
  );
}
