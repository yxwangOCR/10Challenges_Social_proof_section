import React from "react";
import "../sass/Rating.css";
import Stars from "./Stars";

const Rating = () => {
  return (
    <div className='rating'>
      <Stars review='Rated 5 Stars in Reviews' className='stars' />
      <Stars review='Rated 5 Stars in Report Guru' className='stars starTwo' />
      <Stars review='Rated 5 Stars in BestTech' className='stars starThree' />
    </div>
  );
};

export default Rating;
