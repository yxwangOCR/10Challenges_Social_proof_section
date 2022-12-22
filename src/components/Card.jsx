import React from "react";
import "../sass/Card.css";

const Card = ({ url, name, type, content, className }) => {
  return (
    <div className={className}>
      <div className='user-profile'>
        <img src={url} alt='user-profile' />
        <div className='user-info'>
          <h2>{name}</h2>
          <span>{type}</span>
        </div>
      </div>
      <p>{content}</p>
    </div>
  );
};

export default Card;
