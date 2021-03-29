import React from "react";
import noImage from "../images/no-image.jpg";
import previewBtn from "../images/1432343177.svg";
export default function Album({ album }) {
  const displayArtists = () => {
    return album.artists.map((artist) => {
      return <p key={artist.id}>{artist.name}</p>;
    });
  };
  return (
    <div className="album-container">
      <img
        src={album.images.length ? album.images[0].url : noImage}
        alt={album.name}
        width="200px"
        height="200px"
      />
      <p>{album.name}</p>
      {displayArtists()}
      <p>{album.release_date}</p>
      <p>{album.total_tracks} tracks</p>
      <div className="footer">
        <a className="footer-link" href={album.external_urls.spotify}>
          {" "}
          <img src={previewBtn} alt="preview-btn" width="20px" height="20px" />
          Preview on Spotify
        </a>
      </div>
    </div>
  );
}
