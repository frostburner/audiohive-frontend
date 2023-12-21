import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeaderPage from "../src/components/HeroPage/headerPage";
import LoginPage from "../src/pages/Login.jsx";
import MainPage from "../src/pages/MainPage.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
};

export default App;