import React from "react";

const Card = ({ country }) => {
  return (
    <li className="card">
      <img
        className="flag"
        src={country.flags.svg}
        alt={"drapeau" + country.translations.fra.common}
      />
      <div className="infos">
        <h3>{country.translations.fra.common}</h3>
        <h4>{country.capital}</h4>
        <h4 className="pop">Pop.{country.population}</h4>
      </div>
    </li>
  );
};

export default Card;
