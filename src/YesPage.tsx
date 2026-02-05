import React from "react";
import "./YesPage.css";

const YesPage: React.FC = () => {
  return (
    <div className="page">
      <div className="card">
        <div className="heart big">💘</div>

        <h1>Congratulations 🎉</h1>
        <p>You chose the right option ❤️</p>

        <p className="sub">
          I knew you wouldn’t say no 😄
        </p>
      </div>
    </div>
  );
};

export default YesPage;
