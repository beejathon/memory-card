import React from "react";

const Card = (props) => {
  return (
    <div className="cardContainer">
      <img src={props.url} alt={props.name}></img>
    </div>
  )
}

export default Card;