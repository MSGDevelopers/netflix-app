import React from "react";
import "./App.css";
import { Dropdown } from "semantic-ui-react";

const BACKGROUND = [
  require("./images/bg1.jpg"),
  require("./images/bg2.jpg"),
  require("./images/bg3.jpg"),
];
let currentImage = "";

const movieGenres = [
  {
    key: "Action",
    text: "Action",
    value: "Action",
  },
  {
    key: "Adventure",
    text: "Adventure",
    value: "Adventure",
  },
  {
    key: "Comedy",
    text: "Comedy",
    value: "Comedy",
  },
  {
    key: "Documentary",
    text: "Documentary",
    value: "Documentary",
  },
  {
    key: "Drama",
    text: "Drama",
    value: "Drama",
  },
  {
    key: "Fantasy",
    text: "Fantasy",
    value: "Fantasy",
  },
  {
    key: "Horror",
    text: "Horror",
    value: "Horror",
  },
  {
    key: "Musical",
    text: "Musical",
    value: "Musical",
  },
  {
    key: "Romance",
    text: "Romance",
    value: "Romance",
  },
  {
    key: "Sci-fi",
    text: "Sci-fi",
    value: "Sci-fi",
  },
];

function BackgroundRefresh() {
  BACKGROUND.forEach((image, index) => {
    if (currentImage === BACKGROUND[index]) {
      currentImage = BACKGROUND[index++];
    } else {
      currentImage = BACKGROUND[0];
    }
  });
  return currentImage;
}

function App() {
  //setInterval(function() {BackgroundRefresh()}, 3000);

  return (
    <div className="App">
      <div
        className="Background"
        style={{ backgroundImage: "url(" + BackgroundRefresh() + ")" }}
      >
        {" "}
      </div>
      <header className="App-header">
        <h1>OnPointFlix</h1>

        <p>What to watch?</p>

        <button class="ui primary button">FLIX ME</button>

        <div className="Dropdown">
          <Dropdown
            clearable
            placeholder="Genre"
            options={movieGenres}
            selection
          />
        </div>
      </header>
    </div>
  );
}

export default App;
