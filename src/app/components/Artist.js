import React from "react";
import noImage from "../images/no-image.jpg";
import starImg from "../images/star.png";
import "../../App.css";
export default function Artist({ artist }) {
  // console.log(artist, "details");
  // const starRating = () => {

  //   if (Number(artist.popularity) >= 80) return 5;
  //   if (Number(artist.popularity) >= 60) return 4;
  //   if (Number(artist.popularity) >= 40) return 3;
  //   if (Number(artist.popularity) >= 20) return 2;
  //   if (Number(artist.popularity) >= 10) return 1;
  // };

  // function buildRating() {
  //   let stars = starRating()
  //   console.log(stars)
  //   let arr = []
  //   for (let i = 0; i < stars; i++) {
  //     arr.push({ img: star })
  //   }
  //   buildStarRating(arr)
  // }

  // buildRating()
  // const stars = [{ id: 1 }, { id: 2 }, { id: 3 }]
  function buildStarRating(stars) {
    return [...Array(stars)].map((star) => {
      return (
        <img
          // key={star.id}
          src={starImg}
          width="10px"
          height="10px"
          className="Rating--Star Rating--Star__active"
          alt="star-img1"
        />
      )
    })
  }
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
      <div>
        {buildStarRating(Math.floor(Number(artist.popularity) / 20))}
      </div>
    </div>
  );
}
