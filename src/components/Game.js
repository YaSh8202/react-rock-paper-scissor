import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Game = ({ myChoice, score, setScore }) => {
  const [houseChoice, setHouseChoice] = useState("");
  const [playerWin, setPlayerWin] = useState("");
  const [counter, setCounter] = useState(3);

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
    const timer =
      counter > 0
        ? setInterval(() => {
            setCounter((prev) => prev - 1);
          }, 1000)
        : result();
    return () => {
      clearInterval(timer);
    };
  }, [houseChoice, counter]);

  return (
    <div className="game">
      <div className="game__you">
        <span className="text">You Picked</span>
        <div
          className={`icon icon--${myChoice} ${
            playerWin === "win" ? `icon icon--${myChoice}--winner` : ""
          }`}
        ></div>
      </div>
      {playerWin === "win" && (
        <div className="game__play">
          <span className="text">You Win!</span>
          <Link to="/" className="play-again" onClick={() => setHouse()}>
            Play Again
          </Link>
        </div>
      )}
      {playerWin === "lose" && (
        <div className="game__play">
          <span className="text">You Lose</span>
          <Link to="/" className="play-again" onClick={() => setHouse()}>
            Play Again
          </Link>
        </div>
      )}
      {playerWin === "draw" && (
        <div className="game__play">
          <span className="text">Draw</span>
          <Link to="/" className="play-again" onClick={() => setHouse()}>
            Play Again
          </Link>
        </div>
      )}
      <div className="game__house">
        <span className="text">The House Picked</span>
        {counter === 0 ? (
          <div
            className={`icon icon--${houseChoice} ${
              playerWin === "lose" ? `icon icon--${houseChoice}--winner` : ""
            }`}
          ></div>
        ) : (
          <div className="counter">{counter}</div>
        )}
      </div>
    </div>
  );
};

export default Game;
