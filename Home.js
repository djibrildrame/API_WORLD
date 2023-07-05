import React from "react";
import Navigation from "./Navigation";
import "./App.js";
import logo from "./img/1631110818-logo-react-js (1).png";
import Countries from "./Countries";

const Home = () => {
  return (
    <div>
      <Navigation />
      <h1 className="Home">React World</h1>
      <img className="react" src={logo} alt="" />
      <Countries />
    </div>
  );
};

export default Home;
