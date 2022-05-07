import React, { useState } from "react";
import Gameboard from "./components/Gameboard";
import Scoreboard from "./components/Scoreboard";
import uniqid from "uniqid";
import shuffle from "./helpers";
import char1 from "./assets/1.webp";
import char2 from "./assets/2.webp";
import char3 from "./assets/3.webp";
import char4 from "./assets/4.webp";
import char5 from "./assets/5.webp";
import char6 from "./assets/6.webp";
import char7 from "./assets/7.webp";
import char8 from "./assets/8.webp";
import char9 from "./assets/9.webp";
import char10 from "./assets/10.webp";
import char11 from "./assets/11.webp";
import char12 from "./assets/12.webp";
import './styles/App.css';

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [charsArray, setCharsArray] = useState([
    {
      id: uniqid(),
      image: char1,
      name: 'Cry Laugh Lenin',
      clicked: false,
    },
    {
      id: uniqid(),
      image: char2,
      name: 'Exquisite Lenin',
      clicked: false,
    },
    {
      id: uniqid(),
      image: char3,
      name: 'Romantic Lenin',
      clicked: false,
    },
    {
      id: uniqid(),
      image: char4,
      name: 'Surprise Lenin',
      clicked: false,
    },
    {
      id: uniqid(),
      image: char5,
      name: 'Lenin Comin',
      clicked: false,
    },
    {
      id: uniqid(),
      image: char6,
      name: 'Cool Lenin',
      clicked: false,
    },
    {
      id: uniqid(),
      image: char7,
      name: 'Cheers Lenin',
      clicked: false,
    },
    {
      id: uniqid(),
      image: char8,
      name: 'Cat Lenin',
      clicked: false,
    },
    {
      id: uniqid(),
      image: char9,
      name: 'Flag Lenin',
      clicked: false,
    },
    {
      id: uniqid(),
      image: char10,
      name: 'Log Lenin',
      clicked: false,
    },
    {
      id: uniqid(),
      image: char11,
      name: 'Thinking Lenin',
      clicked: false,
    },
    {
      id: uniqid(),
      image: char12,
      name: 'Headache Lenin',
      clicked: false,
    },
  ]);

  const shuffleCards = () => {
    setCharsArray((prevState) => {
      const newArray = shuffle(prevState);
      return newArray;
    })
  }

  const cardClick = (id) => {
    const clicked = checkChar(id);
    if (clicked) {
      resetGame();
      return;
    } else {
      setCharsArray((prevState) => {
        const newArray = prevState.map((char) => {
          if (char.id === id) char.clicked = true;
          return char;
        })
        return newArray;
      })
      tallyScores();
      shuffleCards();
    }
  }

  const tallyScores = () => {
    setScore((prevState) => prevState + 1);
    if (score >= highScore) {
      setHighScore(score)
    }
  }

  const checkChar = (id) => {
    const char = charsArray.filter((char) => char.id === id);
    if (char[0].clicked === true) {
      return true;
    } else return false;
  }

  const resetGame = () => {
    alert('YA DONE GOOFED')
    setCharsArray((prevState) => {
      const newArray = prevState.map((char) => {
        char.clicked = false;
        return char;
      })
      return newArray;
    })
    setScore(0);
    shuffleCards();
  }

  return (
    <div className="App">
      <Scoreboard score={score} high={highScore} />
      <Gameboard chars={charsArray} click={cardClick} />
    </div>
  );
}

export default App;
