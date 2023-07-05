import React from "react";
import Navigation from "./Navigation";
import "./App.js";
import logo from "./img/1631110818-logo-react-js (1).png";

const About = () => {
  return (
    <div>
      <Navigation />
      <h1 className="Home">React World</h1>
      <img className="react" src={logo} alt="" />

      <h1>À propos</h1>
    </div>
  );
};

export default About;
