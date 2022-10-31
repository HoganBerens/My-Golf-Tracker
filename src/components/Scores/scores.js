import React, { useEffect } from "react";

let Scores = () => {
  let scores = JSON.parse(sessionStorage.getItem("scores") || []).slice();
  return (
    <div>
      {scores.map((score, index) => (
        <div key={index}>{console.log(score)}</div>
      ))}
    </div>
  );
};

export default Scores;
