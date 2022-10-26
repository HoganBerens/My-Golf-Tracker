import React from "react";
import "./newScores.css";

let NewScores = () => {
  return (
    <div className="new-score-wrapper">
      <h1 className="new-score-header">Enter New Score</h1>
      <div className="new-score-displays">
        {["Hole", "Score", "FIR", "GIR", "Putts"].map((title, index) => (
          <div key={index} className="new-score-title">
            {title}
          </div>
        ))}
      </div>
      <div className="new-score-hole">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].map(
          (hole, index) => (
            <div key={index} className="new-score-outputs">
              <div className="new-score-row-title">{hole}</div>
              <div className="new-score-row-title"></div>
              <div className="new-score-row-title"></div>
              <div className="new-score-row-title"> </div>
              <div className="new-score-row-title"></div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default NewScores;
