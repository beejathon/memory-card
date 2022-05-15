import React from "react";
import '../styles/Scoreboard.css'

const Scoreboard = (props) => {
  const { score, high } = props;
  return (
    <div className="Scoreboard">
      <button>Current Score: {score}</button>
      <button>High Score: {high}</button>
    </div>
  )
}

export default Scoreboard;