import React from "react";
import Header from "../Header/header";
import "./home.css";

let Home = () => {
  let changeUrl = (url) => {
    window.location = url;
  };

  return (
    <div className="home-container">
      <Header />
      <div className="home-score-wrapper">
        <div
          className="home-new-scores"
          onClick={changeUrl.bind(this, "/newScores")}
        >
          Enter New Score
        </div>
        <div
          className="home-view-scores"
          onClick={changeUrl.bind(this, "/scores")}
        >
          View Previous Scores
        </div>
      </div>
    </div>
  );
};

export default Home;
