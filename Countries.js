import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Countries = () => {
  const [data, setData] = useState([]);
  const [rangeValue, setRangeValue] = useState(35);
  const [selectedRadio, setSelectedRadio] = useState("");
  const radios = ["Africa", "America", "Asia", "Europe", "Océania"];

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setData(res.data));
  }, []);

  return (
    <div className="Countries">
      <ul className="radio">
        {radios.map((continent) => (
          <li className="continent">
            <input
              type="radio"
              id={continent}
              name="continentRadio"
              checked={continent === selectedRadio}
              onChange={(e) => setSelectedRadio(e.target.id)}
            />
            <label htmlFor={continent}>{continent}</label>
          </li>
        ))}

        <input
          className="input"
          type="range"
          min="1"
          max="250"
          defaultValue={rangeValue}
          onChange={(e) => setRangeValue(e.target.value)}
        />
      </ul>

      {selectedRadio && (
        <button onClick={() => setSelectedRadio("")}>
          Annuler la recherche
        </button>
      )}
      <ul className="ordre">
        {data //{'filter permet de trier chaque pays en chaque continent en cliquant sur le continent qu'on souhaite.'}
          .filter((country) => country.continents[0].includes(selectedRadio))
          .sort((a, b) => b.population - a.population)
          .slice(0, rangeValue)
          .map((country, index) => (
            <Card key={index} country={country} />
          ))}
      </ul>
    </div>
  );
};

export default Countries;
