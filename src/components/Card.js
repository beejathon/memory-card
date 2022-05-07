import React from "react";

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