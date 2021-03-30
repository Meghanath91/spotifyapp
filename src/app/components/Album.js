import React from "react";
import noImage from "../images/no-image.jpg";
import previewBtn from "../images/1432343177.svg";

/**
 * @func Album
 * @param {object} props album
 * @return {HTML}
 */
export default function Album({ album }) {
  /**
 * @func displayArtists
 * @return {HTML}
 */
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
      />
      <p>{album.name}</p>
      {displayArtists()}
      <p>{album.release_date}</p>
      <p>{album.total_tracks} tracks</p>
      <div className="footer">
        <a className="footer-link" href={album.external_urls.spotify}>
          <img src={previewBtn} alt="preview-btn" />
          Preview on Spotify
        </a>
      </div>
    </div>
  );
}
