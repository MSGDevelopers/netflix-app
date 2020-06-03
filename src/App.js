import React from "react";
import "./App.css";
import Filter from "./Filter";

const BACKGROUND = [
  require("./images/bg1.jpg"),
  require("./images/bg2.jpg"),
  require("./images/bg3.jpg"),
];
let currentImage = "";

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
      <div className="Background" style={{ backgroundImage: "url(" + BackgroundRefresh() + ")" }}></div>
      <header className="App-header">
        <h1 className="title">OnPointFlix</h1>
        <p className="sub-title">What to watch?</p>
      </header>
      <Filter/>
    </div>
  );
}

export default App;
