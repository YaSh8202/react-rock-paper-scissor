import React from "react";
import {Link} from 'react-router-dom';

const Play = ({setMyChoice}) => {

  const setChoice = (e)=>{
    setMyChoice(e.target.dataset.id);
  }

  return <div className="play" >
    <Link to="/game" >
    <div onClick={setChoice} data-id="paper" className="icon icon--paper">
      Paper
    </div>
    </Link>
    <Link to="/game" >
    <div onClick={setChoice} data-id="scissors" className="icon icon--paper">
    scissor
    </div>
    </Link>
    <Link to="/game" >
    <div onClick={setChoice} data-id="rock" className="icon icon--paper">
      rock
    </div>
    </Link>
  </div>;
};

export default Play;
