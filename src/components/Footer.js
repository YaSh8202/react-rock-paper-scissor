import React from "react";
import Modal from "./Modal";

const Footer = () => {
  const [showModal, setShowModal] = React.useState(false);

  const toggleModal = ()=>{
    setShowModal((prev)=>!prev);
  } 

  return (
    <>
      <footer className="footer">
        <div className="attribution">
          Challenge by{" "}
          <a
            rel="noreferrer"
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
          >
            Frontend Mentor
          </a>
          . Coded by{"  "}
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/YaSh8202"
          >
            Yash Bajaj
          </a>
          .
        </div>
        <button onClick={toggleModal} className="rules">Rules</button>
      </footer>
      {showModal && <Modal onToggle={toggleModal} />}
    </>
  );
};

export default Footer;
