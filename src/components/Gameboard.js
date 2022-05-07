import React from "react";
import Card from "./Card";
import '../styles/Gameboard.css';

const Gameboard = (props) => {
  const { chars, click } = props;
  return (
    <div className="Gameboard">
      {chars.map((char) => {
        return (
          <Card 
            key={char.id}
            id={char.id} 
            image={char.image} 
            name={char.name} 
            click={click} 
          />
        )
      })}
    </div>
  )
}

export default Gameboard;