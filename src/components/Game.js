import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Game = ({ myChoice, score, setScore }) => {
  const [houseChoice, setHouseChoice] = useState("");
  const [playerWin, setPlayerWin] = useState("");

  const setHouse = () => {
    const choices = ["rock", "paper", "scissors"];
    setHouseChoice(choices[Math.floor(Math.random() * 3)]);
    console.log(houseChoice);
  };

  useEffect(() => {
    setHouse();
  }, []);

  const result = () => {
    if (myChoice === "rock" && houseChoice === "scissors") {
      setPlayerWin("win");
      setScore((s) => s + 1);
    } else if (myChoice === "rock" && houseChoice === "paper") {
      setPlayerWin("lose");
      setScore((s) => s - 1);
    } else if (myChoice === "rock" && houseChoice === "rock") {
      setPlayerWin("draw");
    } else if (myChoice === "scissors" && houseChoice === "paper") {
      setPlayerWin("win");
      setScore((s) => s + 1);
    } else if (myChoice === "scissors" && houseChoice === "rock") {
      setPlayerWin("lose");
      setScore(score - 1);
    } else if (myChoice === "scissors" && houseChoice === "scissors") {
      setPlayerWin("draw");
    } else if (myChoice === "paper" && houseChoice === "scissors") {
      setPlayerWin("lose");
      setScore((s) => s - 1);
    } else if (myChoice === "paper" && houseChoice === "rock") {
      setPlayerWin("win");
      setScore((s) => s + 1);
    } else if (myChoice === "paper" && houseChoice === "paper") {
      setPlayerWin("draw");
    }
  };

  useEffect(() => {
    result();
  }, [houseChoice]);

  return (
    <div className="game">
      my Choice: {myChoice}
      <br />
      House Choice: {houseChoice}
      <br />
      Result :{playerWin && <h2>{playerWin}</h2>}
      <br />
      <Link to="/" onClick={()=>setHouseChoice("")}>
        Play Again
      </Link>
    </div>
  );
};

export default Game;
