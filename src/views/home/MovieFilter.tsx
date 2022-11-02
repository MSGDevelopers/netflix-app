import { Button, Checkbox, DatePicker, Select, Slider } from 'antd';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { movieGenres } from '../../utils/constants';
import './MovieFilter.scss';

interface Props {
  onFilterClick: any;
}

const MovieFilter = ({ onFilterClick }: Props) => {
  const { RangePicker } = DatePicker;

  // dropdown
  const [genre, setGenre] = useState();
  const [yearRange, setYearRange] = useState();
  const [tomatoe, setTomatoe] = useState([0, 10]);
  const [filters, setFilters] = useState({});

  // dropdowns
  const handleGenre = (value: any) => {
    setGenre(value);
  };

  const handleYear = (value: any) => {
    setYearRange(value);
  };

  const handleTomatoe = (value: any) => {
    setTomatoe(value);
  };

  useEffect(() => {
    let filterSet = {
      genre: genre,
      yearRange: yearRange,
      tomatoe: tomatoe
    };
    setFilters(filterSet);
  }, [genre, yearRange, tomatoe]);

  return (
    <div className="flix-movie-filter">
      <div className="flix-movie-filter-form">
        <div className="flix-movie-filter-form-item">
          <h1 className="flix-movie-filter-form-item-title">Genre</h1>
          <Select
            className="dropdown-item"
            placeholder="Genre"
            options={movieGenres}
            onChange={handleGenre}
          ></Select>
        </div>
        <div className="flix-movie-filter-form-item">
          <h1 className="flix-movie-filter-form-item-title">Year</h1>
          <RangePicker
            className="date-picker"
            onChange={handleYear}
            picker="year"
            defaultPickerValue={[
              moment().subtract(20, 'years'),
              moment().subtract(20, 'years')
            ]}
          />
        </div>
        <div className="flix-movie-filter-form-item">
          <h1 className="flix-movie-filter-form-item-title">Rating</h1>
          <div className="range-item">
            <Slider
              range
              tooltipVisible
              defaultValue={[0, 10]}
              min={0}
              max={10}
              onChange={handleTomatoe}
            ></Slider>
          </div>
        </div>
      </div>
      <Button
        className="flix-movie-filter-button"
        size="large"
        type="primary"
        onClick={() => onFilterClick(filters)}
      >
        Flix Me
      </Button>
    </div>
  );
};

export default MovieFilter;
