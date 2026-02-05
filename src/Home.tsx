import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home: React.FC = () => {
  const noBtnRef = useRef<HTMLButtonElement>(null);
  const navigate = useNavigate();

  const moveNoButton = () => {
    if (!noBtnRef.current) return;

    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;

    noBtnRef.current.style.transform = `translate(${x}px, ${y}px)`;
  };

  const handleYes = () => {
    navigate("/yes");
  };

  return (
    <div className="page">
      <div className="card">
        <button className="close-btn">✕</button>

        <div className="heart">💖</div>

        <h1>
          Will you be my <br /> Valentine?
        </h1>

        <div className="buttons">
          <button className="yes-btn" onClick={handleYes}>
            Yes
          </button>

          <button
            ref={noBtnRef}
            className="no-btn"
            onMouseEnter={moveNoButton}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
