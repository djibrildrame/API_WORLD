import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="Navigation">
      <ul>
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav.active" : "")}>
          <li className="ordonné">Accueil</li>
        </NavLink>
        <NavLink
          to="/about"
          className={(nav) => (nav.isActive ? "nav.active" : "")}
        >
          <li className="ordonné">À propos</li>
        </NavLink>
        <NavLink
          to="/blog"
          className={(nav) => (nav.isActive ? "nav.active" : "")}
        >
          <li className="ordonné">Blog</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
