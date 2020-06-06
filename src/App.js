import React, { useState, useEffect } from "react";
import "./App.css";
import Filter from "./components/Filter";
import Results from "./components/Results";

function App() {
  const background = [
    require("./images/bg1.jpg"),
    require("./images/bg2.jpg"),
    require("./images/bg3.jpg"),
  ];
  const [currentBackground, setBackground] = useState(background[0]);

  function BackgroundRefresh() {
    console.log("background refreshing");
    let currentIndex = background.findIndex(
      (image) => image === currentBackground
    );
    if (
      currentBackground === background[currentIndex] &&
      currentIndex < background.length - 1
    ) {
      currentIndex++;
      setBackground(background[currentIndex]);
    } else {
      setBackground(background[0]);
    }
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      BackgroundRefresh();
    }, 5000);
    return () => clearInterval(intervalId);
  });

  return (
    <div className="App">
      <div
        className="Background"
        style={{ backgroundImage: "url(" + currentBackground + ")" }}
      ></div>
      <header className="App-header">
        <h1 className="title">OnPointFlix</h1>
        <p className="sub-title">What to watch?</p>
      </header>
      <div className="App-body">
        <Filter />
        <Results />
      </div>
    </div>
  );
}

export default App;
