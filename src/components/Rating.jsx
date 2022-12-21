import React from "react";
import "../sass/Rating.css";
import Stars from "./Stars";

const Rating = () => {
  return (
    <div className='rating'>
      <Stars>Rated 5 Stars in Reviews</Stars>
      <Stars>Rated 5 Stars in Report Guru</Stars>
      <Stars>Rated 5 Stars in BestTech</Stars>
    </div>
  );
};

export default Rating;
