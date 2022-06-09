import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Game from "./components/Game";
import Play from "./components/Play";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {

  const [myChoice,setMyChoice] = useState("");
  const [score,setScore] = useState(0);

  return (
    <> 
      <div className="container">
        <Header score={score} />
        <Routes>
          <Route exact path="/" element={<Play setMyChoice={setMyChoice} />} />
          <Route exact path="/game" element={<Game myChoice={myChoice} score={score} setScore={setScore} />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
