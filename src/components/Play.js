import React from "react";
import { Link } from "react-router-dom";

import Triangle from "../images/bg-triangle.svg";

const Play = ({ setMyChoice }) => {
  const setChoice = (e) => {
    setMyChoice(e.target.dataset.id);
  };

  return (
    <div className="play">
      <img src={Triangle} alt="" className="triangle" />

      <div className="items">
        <Link to="/game">
          <div onClick={setChoice} data-id="paper" className="icon icon--paper">
            
          </div>
        </Link>
        <Link to="/game">
          <div onClick={setChoice} data-id="rock" className="icon icon--rock">
            
          </div>
        </Link>
        <Link to="/game">
          <div
            onClick={setChoice}
            data-id="scissors"
            className="icon icon--scissors"
          >
            
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Play;
