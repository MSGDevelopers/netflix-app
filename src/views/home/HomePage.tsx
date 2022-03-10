import { useEffect, useState } from 'react';
import './HomePage.scss';
import { backgroundImages } from '../../utils/constants';
import MovieFilter from './MovieFilter';
import Results from './Results';

const HomePage = () => {
  // State variable + function that is built-in from React (We declare our bgImage variable here)
  const [bgImage, setBgImage] = useState(backgroundImages[0]);
  const [showResults, setShowResults] = useState(false);

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

  const displayResults = () => {
    setShowResults(true);
  };

  const resetResults = () => {
    setShowResults(false);
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
          <p className="sub-title">
            {showResults ? 'Watch this now!' : 'What to watch?'}
          </p>
        </header>
        {!showResults ? (
          <MovieFilter onFilterClick={() => displayResults()}></MovieFilter>
        ) : (
          <Results onButtonClick={() => resetResults()}></Results>
        )}
      </section>
    </div>
  );
};

export default HomePage;
