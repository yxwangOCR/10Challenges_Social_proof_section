import React from "react";
import Star from "../images/icon-star.svg";
import "../sass/Stars.css";

const Stars = ({ review, className }) => {
  return (
    <div className={className}>
      <div>
        <span>
          <img src={Star} alt='rating star' />
        </span>
        <span>
          <img src={Star} alt='rating star' />
        </span>
        <span>
          <img src={Star} alt='rating star' />
        </span>
        <span>
          <img src={Star} alt='rating star' />
        </span>
        <span>
          <img src={Star} alt='rating star' />
        </span>
      </div>
      <p>{review}</p>
    </div>
  );
};

export default Stars;
