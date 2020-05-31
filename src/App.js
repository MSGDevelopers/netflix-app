import React from 'react';
import logo from './logo.svg';
import './App.css';
const BACKGROUND = [
  require('./images/bg1.jpg'),
  require('./images/bg2.jpg'),
  require('./images/bg3.jpg')
];
let currentImage = '';

function BackgroundRefresh() {
    BACKGROUND.forEach((image, index) => {
      if (currentImage === BACKGROUND[index]) {
        currentImage = BACKGROUND[index++];
      } else {
        currentImage = BACKGROUND[0];
      }
    })
    console.log(currentImage)
}

function App() {

  setInterval(function() {BackgroundRefresh()}, 3000);

  return (
    <div className="App">
      <div className="Background" style={{backgroundImage: "url(" + currentImage + ")"}}> </div>
      <header className="App-header">
      
        <h1>OnPointFlix</h1>
        <p>
          Edit <code>src/App.js</code> to make changes bro.
        </p>
        <a>
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
