import React from "react";
import "../sass/Main.css";
import Card from "./Card";
import userOne from "../images/image-colton.jpg";
import userTwo from "../images/image-irene.jpg";
import userThree from "../images/image-anne.jpg";

const Main = () => {
  return (
    <main className='main'>
      <Card
        className='cardOne card'
        url={userOne}
        name='Colton Smith'
        type='Verified Buyer'
        content='"We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!"'
      />
      <Card
        className='cardTwo card'
        url={userTwo}
        name='Irene Roberts'
        type='Verified Buyer'
        content='"Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery."'
      />
      <Card
        className='cardThree card'
        url={userThree}
        name='Anne Wallace'
        type='Verified Buyer'
        content='"Put an order with this company and can only praise them for the very high
    standard. Will definitely use them again and recommend them to everyone!"'
      />
    </main>
  );
};

export default Main;
