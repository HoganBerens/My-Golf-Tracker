import React from "react";
import "./loginPage.css";

let logins = [{ email: "test@gmail.com", password: "test" }];

let LoginPage = () => {
  let loginHandler = (event) => {
    event.preventDefault();

    let email = event.target[0].value;
    let password = event.target[1].value;

    if ((logins[0].email === email, logins[0].password === password)) {
      window.location = "/home";
    } else {
      alert("Email or Password Incorrect");
    }
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <div className="login-title">My Golf Tracker</div>
        <form id="login-form" className="login-form" onSubmit={loginHandler}>
          <input
            className="login-input"
            type="email"
            placeholder="Enter Email"
          />
          <input
            className="login-input"
            type="password"
            placeholder=" Enter Password"
          />
          <button className="login-submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
