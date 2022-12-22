import React from "react";
import "../sass/Rating.css";
import Stars from "./Stars";

const Rating = () => {
  return (
    <div className='rating'>
      <Stars review='Rated 5 Stars in Reviews' />
      <Stars review='Rated 5 Stars in Report Guru' />
      <Stars review='Rated 5 Stars in BestTech' />
    </div>
  );
};

export default Rating;
