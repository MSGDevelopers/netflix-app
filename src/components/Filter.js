import React from "react";
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
  const { Option } = Select;


  function handleClick() {
    console.log('handleClick');
    onFilterClick();
  }

  return (
    <div id="filter-container">
      <div className="filter-item">
        <h1 className="filter-item-title">Genre</h1>
        <Select
          className="dropdown-item"
          placeholder="Genre"
          options={movieGenres}
        ></Select>
      </div>
      <div className="filter-item">
        <h1 className="filter-item-title">Year</h1>
        <RangePicker
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
          <Slider range tooltipVisible defaultValue={[0, 100]} min={0} max={100}></Slider>
        </div>
      </div>
      <div className="filter-item">
        <h1 className="filter-item-title">Type</h1>
        <div className="checkbox-item">
          <Checkbox> Movies </Checkbox>
          <Checkbox> TV Shows </Checkbox>
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
