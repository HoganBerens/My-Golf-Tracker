import React, { useEffect } from "react";
import "./scores.css";

let Scores = () => {
  let scores = JSON.parse(sessionStorage.getItem("scores") || null);

  return (
    <div>
      <div className="wrapper">
        {["Score", "FIR", "GIR", "Putts"].map((title, index) => (
          <div key={index} className="titles">
            {title}
          </div>
        ))}

        {scores.map((score, index) => (
          <div key={index}>
            {score.map((hole, index) => (
              <div key={index}>
                <div className="wrapper">
                  <div className="children">{hole.score}</div>
                  <div className="children">{hole.fir ? "Yes" : "No"}</div>
                  <div className="children">{hole.gir ? "Yes" : "No"}</div>
                  <div className="children">{hole.putts}</div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Scores;
