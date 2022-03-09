import React, { useEffect, useState } from 'react';
import './HomePage.scss';
import { backgroundImages } from '../../utils/constants';

const HomePage = () => {
  // State variable + function that is built-in from React (We declare our bgImage variable here)
  const [bgImage, setBgImage] = useState(backgroundImages[0]);

  // This function changes the background image
  const changeBackground = () => {
    const duration = 5000;
    let imageIndex = 0;
    // setInterval function will change the image every 5 seconds
    setInterval(function () {
      imageIndex =
        imageIndex === backgroundImages.length - 1 ? 0 : (imageIndex += 1);
      setBgImage(backgroundImages[imageIndex]);
    }, duration);
  };

  // Initial function that will run only once (kicks off the background change)
  useEffect(() => {
    changeBackground();
  }, []);

  return (
    <div
      className="flix-background"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <section className="flix-content">
        <header className="flix-header">
          <h1 className="title">OnPointFlix</h1>
          <p className="sub-title">What to watch?</p>
        </header>
      </section>
    </div>
  );
};

export default HomePage;
