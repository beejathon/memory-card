import React from "react";
import '../styles/Card.css';

const Card = (props) => {
  const { click, id, image, name } = props;
  const handleClick = (e) => {
    e.preventDefault();
    click(id)
  }
  return (
    <div className="cardContainer" onClick={handleClick}>
      <img src={image} alt={name}></img>
    </div>
  )
}

export default Card;