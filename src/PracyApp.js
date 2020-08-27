import React from "react";
import "./App.css";
import Joke from "./Joke";
import jokesData from "./jokesData";

function PracyApp() {
  const jokeComponents = jokesData.map((joke) => {
    return <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />;
  });

  return (
    <div>
      {jokeComponents}
    </div>
  );
}

export default PracyApp;
