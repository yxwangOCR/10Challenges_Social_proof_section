import React from "react";
import "../sass/Card.css";

const Card = ({ url, name, type, content, className }) => {
  return (
    <div className={className}>
      <div className='user-profile'>
        <img src={url} alt='user-profile' />
        <span>
          <h5>{name}</h5>
          <h6>{type}</h6>
        </span>
      </div>
      <p>{content}</p>
    </div>
  );
};

export default Card;
