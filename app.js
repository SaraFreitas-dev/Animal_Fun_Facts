import { animals } from "./animals";
import React from "react";
import ReactDOM from "react-dom";

const title = "";

const showBackground = true;

const background = (
  <img src="/images/ocean.jpg" 
  className="background" 
  alt="ocean" />
);

const images = [];

for (const animal in animals) {
  images.push(
    <img
      key={animal}
      className="animal"
      alt={animal}
      src={animals[animal].image}
      aria-label={animal}
      role="button"
      onClick={displayFact}
    />
  );
}

const animalFacts = (
  <div>
    {/* <h1>{title === "" ? "Click an animal for a fun fact" : title}</h1> */}
    <h1>{title || "Click an animal for a fun fact"}</h1>
    {showBackground && background}
    <div className="animals">{images}</div>
    <p id="fact"></p>
  </div>
);
 const animalFacts = title === "" ? <h2>Click an animal for a fun fact</h2> : <h1>{title}</h1>; 

function displayFact(e) {
  const animalName = e.target.alt;
  const randomIndex = Math.floor(Math.random() * 3);
  const funFact = animals[animalName].facts[randomIndex];
  const factElement = document.getElementById("fact");
  factElement.innerHTML = funFact;
}

ReactDOM.render(animalFacts, document.getElementById("app"));
