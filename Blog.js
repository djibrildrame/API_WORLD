import React, { useEffect, useState } from "react";
import logo from "./img/1631110818-logo-react-js (1).png";
import axios from "axios";

const Blog = () => {
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  const getData = () => {
    axios.get("http://localhost:3003/articles").then((res) => console.log(res));
  };
  useEffect(() => getData(), []);

  const handlesubmit = (e) => {
    e.preventDefault();

    if (content.length < 140) {
      setError(true);
    } else {
      setError(false);
    }
  };

  return (
    <div>
      <h1 className="Home">React World</h1>
      <img className="react" src={logo} alt="" />
      <h1>Blog</h1>

      <form onSubmit={(e) => handlesubmit(e)}>
        <input className="formulaire" type="text" placeholder="Nom" />
        <textarea
          //Voici un style conditionnel comment cela s'ecrit.
          style={{ border: error ? "1px solid red" : "1px solid #61dafb" }}
          className="formulaire"
          placeholder="Message"
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        {error && (
          <p className="caractere">
            Veuillez écrire un minimum de de 140 caractères
          </p>
        )}
        <input className="submit" type="submit" value="Envoyer" />
      </form>
    </div>
  );
};

export default Blog;
