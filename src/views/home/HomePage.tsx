import { useEffect, useState } from 'react';
import './HomePage.scss';
import bg1 from '../../assets/bg1.jpg';
import MovieFilter from './MovieFilter';
import Results from './Results';
import { Spin } from 'antd';
import { movieGenres } from '../../utils/constants';

const HomePage = () => {
  // State variable + function that is built-in from React (We declare our bgImage variable here)
  const [loading, setLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [selectedMovie, setSelectedMovie]: any = useState();
  const [movieDetails, setMovieDetails] = useState();
  const [baseImageUrl, setBaseImageUrl] = useState('');

  // Fetch Image
  async function fetchImageConfig() {
    await fetch(
      `https://api.themoviedb.org/3/configuration?api_key=989bbe2e8d1789e1dfc71b24336f1e16`
    )
      .then(response => response.json())
      .then(response => {
        setBaseImageUrl(response.images.base_url + 'w500');
      })
      .catch(err => console.error(err));
  }

  // Fetch Movie
  async function fetchMovie(filters: any) {
    let genreID;
    let startYear;
    let endYear;
    let startRating;
    let endRating;

    // Extract filters into URL query parameters for API fetch
    for (var key of Object.keys(filters)) {
      if (key === 'genre') {
        if (filters[key] !== undefined) {
          genreID = filters[key];
        } else {
          // Randomly select a genre if no genre was selected
          const randomIndex = Math.floor(Math.random() * movieGenres.length);
          genreID = movieGenres[randomIndex].value;
        }
      } else if (key === 'yearRange') {
        if (filters[key] !== undefined) {
          startYear = filters[key][0].format('YYYY');
          endYear = filters[key][1].format('YYYY');
        } else {
          // Set year range from 1900 to today's year if no dates were selected
          startYear = '1900';
          endYear = new Date().getFullYear();
        }
      } else if (key === 'tomatoe') {
        if (filters[key] !== undefined) {
          startRating = filters[key][0];
          endRating = filters[key][1];
        }
      }
    }

    // TODO: CURRENTLY WE'RE ONLY FETCHING 1 PAGE, WE NEED TO PAGINATE THROUGH ALL OF THE AVAILABLE PAGES AND STORE THE ENTIRE RESULT BEFORE RANDOMIZING

    // Fetch movie list from API
    await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=989bbe2e8d1789e1dfc71b24336f1e16&language=en-US&sort_by=popularity.desc&include_video=true&include_adult=false&page=1&primary_release_date.gte=${startYear}&primary_release_date.lte=${endYear}&with_genres=${genreID}&vote_average.gte=${startRating}&vote_average.lte=${endRating}`
    )
      .then(response => response.json())
      .then(response => {
        const randomlyPickedNumber = randomizeMovie(response.results.length);
        const resultMovie = response.results[randomlyPickedNumber];
        setSelectedMovie(resultMovie);
      })
      .catch(err => console.error(err));
  }

  const randomizeMovie = (numberOfMovies: number) => {
    // Takes the the total number of movies available and picks a random one between 0 and the total number of movies available
    const min = Math.ceil(0);
    const max = Math.floor(numberOfMovies);
    const pickedMovie = Math.floor(Math.random() * (max - min + 1) + min);
    return pickedMovie;
  };

  // Set all variables from MovieFilter component
  const pickRandomMovie = (filters: any) => {
    setLoading(true);
    fetchMovie(filters).then(() => {
      setShowResults(true);
      setLoading(false);
    });
  };

  const resetResults = () => {
    setShowResults(false);
    setSelectedMovie(null);
  };

  // Fetch movie details once movie has been picked
  useEffect(() => {
    if (!!selectedMovie) {
      selectedMovie.poster_path = baseImageUrl + selectedMovie.poster_path;
    }
  }, [selectedMovie]);

  // Initial function that will run only once
  useEffect(() => {
    fetchImageConfig();
  }, []);

  return (
    <div className="flix-background" style={{ backgroundImage: `url(${bg1})` }}>
      <section className="flix-content">
        <header className="flix-header">
          <h1 className="title">OnPointFlix</h1>
          <p className="sub-title">
            {showResults ? 'Watch this now!' : 'What to watch?'}
          </p>
        </header>
        {!showResults && !loading && (
          <MovieFilter onFilterClick={pickRandomMovie}></MovieFilter>
        )}
        {showResults && !loading && (
          <Results
            movie={selectedMovie}
            onBackButtonClick={() => resetResults()}
          ></Results>
        )}
        {loading && (
          <Spin className="flix-spinner" tip="Grab your popcorn..."></Spin>
        )}
      </section>
    </div>
  );
};

export default HomePage;
