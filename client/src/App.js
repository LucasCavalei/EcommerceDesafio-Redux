import "./App.css";
import React from "react";
import Home from "./pages/home/Home";
import Signup from "./pages/forms/Signup";
import Header from "./components/header/Header";
import Login from "./pages/forms/Login";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/footer.";
import LottieIssue from "./pages/404/LottieIssue";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/issue" element={<LottieIssue />} />
        {/* </Route> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
