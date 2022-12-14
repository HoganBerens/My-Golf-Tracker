import React from "react";
import "./newScores.css";
import { useState, useEffect, useCallback } from "react";

let NewScores = () => {
  const [newScores, setNewScores] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  let handleChange = useCallback(
    (index, stat, value) => {
      let newArr = newScores.slice();
      newArr[index][stat] = value;

      setNewScores(newArr);
    },
    [newScores]
  );

  let submitHandler = (score) => {
    let scores = JSON.parse(sessionStorage.getItem("scores") || null);
    sessionStorage.removeItem("scores");
    if (scores === null) {
      scores = [];
    }
    scores.push(score);
    console.log(JSON.stringify(scores));
    sessionStorage.setItem("scores", JSON.stringify(scores));
    window.location = "/home";
  };

  useEffect(() => {
    let scoreList = [];
    for (let i = 0; i < 18; i++) {
      scoreList.push({ score: 0, fir: false, gir: false, putts: 0 });
    }
    setNewScores(scoreList);
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return null;
  } else {
    return (
      <div className="new-score-wrapper">
        <h1 className="new-score-header">Enter New Score</h1>
        <div className="new-score-displays">
          {["Hole", "Score", "FIR", "GIR", "Putts"].map((title, index) => (
            <div key={index} className="title">
              {title}
            </div>
          ))}
        </div>
        <div className="new-score-hole">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].map(
            (hole, index) => (
              <div key={index} className="new-score-outputs">
                <div className="new-score-row-title">{hole}</div>
                <div className="new-score-row-title">
                  {newScores[index].score}
                </div>
                <div
                  onClick={handleChange.bind(
                    this,
                    index,
                    "score",
                    newScores[index].score + 1
                  )}
                >
                  <div className="arrow">U</div>
                </div>
                <div
                  onClick={handleChange.bind(
                    this,
                    index,
                    "score",
                    newScores[index].score - 1
                  )}
                >
                  <div className="arrow">D</div>
                </div>

                <div
                  className="new-score-row-title"
                  onClick={handleChange.bind(
                    this,
                    index,
                    "fir",
                    !newScores[index].fir
                  )}
                >
                  {newScores[index].fir ? "Yes" : "No"}
                </div>

                <div
                  className="new-score-row-title"
                  onClick={handleChange.bind(
                    this,
                    index,
                    "gir",
                    !newScores[index].gir
                  )}
                >
                  {newScores[index].gir ? "Yes" : "No"}
                </div>

                <div className="new-score-row-title">
                  {newScores[index].putts}
                </div>
                <div
                  onClick={handleChange.bind(
                    this,
                    index,
                    "putts",
                    newScores[index].putts + 1
                  )}
                >
                  <div className="arrow">U</div>
                </div>
                <div
                  onClick={handleChange.bind(
                    this,
                    index,
                    "putts",
                    newScores[index].putts - 1
                  )}
                >
                  <div className="arrow">D</div>
                </div>
              </div>
            )
          )}
        </div>
        <button onClick={submitHandler.bind(this, newScores)}>Submit</button>
      </div>
    );
  }
};

export default NewScores;
