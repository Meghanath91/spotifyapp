import React from "react";
import noImage from "../images/no-image.jpg";
import starImg from "../images/star.png";
import "../../App.css";

/**
 * @func Artist
 * @param {object} props artist
 * @return {HTML}
 */
export default function Artist({ artist }) {

  /**
 * @func buildStarRating
 * @param {Number} stars
 * @return {HTML}
 */
  function buildStarRating(stars) {
    return [...Array(stars)].map((element, index) => {
      return (
        <img
          key={index}
          src={starImg}
          className="rating-star-img"
          alt="star-img1"
        />
      );
    });
  }
  return (
    <div className="artist-container">
      <img
        src={artist.images.length ? artist.images[0].url : noImage}
        alt={artist.name}
        className="artist-img"
      />
      <h3>{artist.name}</h3>
      <p> {artist.followers.total} followers </p>
      <div>{buildStarRating(Math.floor(Number(artist.popularity) / 20))}</div>
    </div>
  );
}
