import LoginPage from "./components/Login/loginPage";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/home";
import Profile from "./components/Profile/profile";
import "./App.css";
import Scores from "./components/Scores/scores";
import NewScores from "./components/Scores/newScores";

function App() {
  return (
    <Routes>
      <Route path={"/"} exact={true} element={<LoginPage />} />
      <Route path={"/home"} exact={true} element={<Home />} />
      <Route path={"/profile"} exact={true} element={<Profile />} />
      <Route path={"/newScores"} exact={true} element={<NewScores />} />
      <Route path={"/scores"} exact={true} element={<Scores />} />
    </Routes>
  );
}

export default App;
