import React, {useState} from "react";
import moment from "moment";
import "./Filter.css";
import { Button, DatePicker, Select, Slider, Checkbox } from "antd";


function Filter({onFilterClick}) {
  const movieGenres = [
    {
      label: "Action",
      value: "Action",
    },
    {
      label: "Adventure",
      value: "Adventure",
    },
    {
      label: "Comedy",
      value: "Comedy",
    },
    {
      label: "Documentary",
      value: "Documentary",
    },
    {
      label: "Drama",
      value: "Drama",
    },
    {
      label: "Fantasy",
      value: "Fantasy",
    },
    {
      label: "Horror",
      value: "Horror",
    },
    {
      label: "Musical",
      value: "Musical",
    },
    {
      label: "Romance",
      value: "Romance",
    },
    {
      label: "Sci-fi",
      value: "Sci-fi",
    },
  ];

  const { RangePicker } = DatePicker;
  // dropdown
  const [genre, setGenre] = useState()
  const [yearRange, setYearRange] = useState()
  const [tomatoe, setTomatoe] = useState()
  const [movie, setMovie] = useState()
  const [television, setTelevision] = useState()

  function handleGenre(value) {
    setGenre(value);
    // console.log(genre)
  }

  function handleYear(value) {
    setYearRange(value);
  }

  function handleTomatoe(value) {
    setTomatoe(value);
   
  }

  function handleMovies(value) {
    setMovie(value.target.checked);
    
  }

  function handleTelevision(value) {
    setTelevision(value.target.checked);
   
  }

  function handleClick() {
    console.log('handleClick');
    onFilterClick();
    console.log(genre)
    console.log(yearRange)
    console.log(tomatoe)
    console.log(movie)
    console.log(television)
  }

  return (
    <div id="filter-container">
      <div className="filter-item">
        <h1 className="filter-item-title">Genre</h1>
        <Select
          className="dropdown-item"
          placeholder="Genre"
          options={movieGenres}
          onChange={handleGenre}
        ></Select>
      </div>
      <div className="filter-item">
        <h1 className="filter-item-title">Year</h1>
        <RangePicker
          onChange={handleYear}
          picker="year"
          defaultPickerValue={[
            moment().subtract(20, "years"),
            moment().subtract(20, "years"),
          ]}
        />
      </div>
      <div className="filter-item">
        <h1 className="filter-item-title">Rotten tomatoes</h1>
        <div className="range-item">
          <Slider 
            range 
            tooltipVisible 
            defaultValue={[0, 100]} 
            min={0} 
            max={100}
            onChange={handleTomatoe}
          ></Slider>
        </div>
      </div>
      <div className="filter-item">
        <h1 className="filter-item-title">Type</h1>
        <div className="checkbox-item">
          <Checkbox onChange={handleMovies}> Movies </Checkbox>
          <Checkbox onChange={handleTelevision}> TV Shows </Checkbox>
        </div>
      </div>
      <div className="filter-button">
        <Button className="submit-button" type="primary" onClick={handleClick}>
          FLIX ME
        </Button>
      </div>
    </div>
  );
}

export default Filter;
