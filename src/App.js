import LoginPage from "./components/Login/loginPage";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/home";
import Profile from "./components/Profile/profile";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path={"/"} exact={true} element={<LoginPage />} />
      <Route path={"/home"} exact={true} element={<Home />} />
      <Route path={"/profile"} exact={true} element={<Profile />} />
    </Routes>
  );
}

export default App;
