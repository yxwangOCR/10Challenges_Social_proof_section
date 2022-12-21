import React from "react";
import Star from "../images/icon-star.svg";
import "../sass/Stars.css";

const Stars = ({ children }) => {
  return (
    <div className="stars">
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
      <p>{children}</p>
    </div>
  );
};

export default Stars;