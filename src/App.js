import React, {useState, useEffect} from "react";
import "./App.css";
import Filter from "./Filter";

function App() {
  
  const BACKGROUND = [
    require("./images/bg1.jpg"),
    require("./images/bg2.jpg"),
    require("./images/bg3.jpg"),
  ];
  const [currentBackground, setBackground] = useState(BACKGROUND[0]);

  function BackgroundRefresh() {
    console.log('background refreshing');
    let currentIndex = BACKGROUND.findIndex(image => image === currentBackground)
    if (currentBackground === BACKGROUND[currentIndex] && currentIndex < BACKGROUND.length - 1) {
      currentIndex++;
      setBackground(BACKGROUND[currentIndex]);
    } else {
      setBackground(BACKGROUND[0]);
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
      <div className="Background" style={{ backgroundImage: "url(" + currentBackground + ")" }}></div>
      <header className="App-header">
        <h1 className="title">OnPointFlix</h1>
        <p className="sub-title">What to watch?</p>
      </header>
      <Filter/>
    </div>
  );
}

export default App;
