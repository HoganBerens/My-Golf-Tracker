import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

let Header = () => {
  return (
    <div className="header-container">
      <div className="header-title">My Golf Tracker</div>
      <Link className="header-profileLink" to={"/profile"}>
        Profile
      </Link>
    </div>
  );
};

export default Header;
