import React from 'react';
import "./Filter.css";
import { Dropdown, Checkbox, Card, Icon, Image } from "semantic-ui-react";

function Filter() {

	const movieGenres = [
		{
			key: "Action",
			text: "Action",
			value: "Action",
		},
		{
			key: "Adventure",
			text: "Adventure",
			value: "Adventure",
		},
		{
			key: "Comedy",
			text: "Comedy",
			value: "Comedy",
		},
		{
			key: "Documentary",
			text: "Documentary",
			value: "Documentary",
		},
		{
			key: "Drama",
			text: "Drama",
			value: "Drama",
		},
		{
			key: "Fantasy",
			text: "Fantasy",
			value: "Fantasy",
		},
		{
			key: "Horror",
			text: "Horror",
			value: "Horror",
		},
		{
			key: "Musical",
			text: "Musical",
			value: "Musical",
		},
		{
			key: "Romance",
			text: "Romance",
			value: "Romance",
		},
		{
			key: "Sci-fi",
			text: "Sci-fi",
			value: "Sci-fi",
		},
	];

  return (
  <div className="App-body">
    <div id="filter-container">
      <div className="filter-item">
        <h1 className="filter-item-title">Genre</h1>
        <Dropdown
          selection
          clearable
          placeholder="Genre"
          options={movieGenres}
        />
      </div>
      <div className="filter-item">
        <h1 className="filter-item-title">Year</h1>
        <Dropdown
          selection
          clearable
          placeholder="Year"
          options={movieGenres}
        />
      </div>
      <div className="filter-item">
        <h1 className="filter-item-title">Rotten Tomatoes</h1>
        <Dropdown
          selection
          clearable
          placeholder="Slider Goes Here"
          options={movieGenres}
        />
      </div>
      <div className="filter-item">
        <h1 className="filter-item-title">Type</h1>
        <Checkbox label='Movies' />
        <Checkbox label='TV Shows' />
      </div>
      <div className="filter-button">
        <button className="ui primary button">FLIX ME</button>
      </div>
    </div>
    <div id="results-container">
      <Card>
        <Image src='https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/9ada75bf-aba2-4259-b1ca-16d33469a46f/14.jpg' wrapped ui={false} />
        <Card.Content>
          <Card.Header>Star Wars: Darth Plagueis</Card.Header>
          <Card.Meta>
            <span className='date'>July 4th, 2020</span>
          </Card.Meta>
          <Card.Description>
            The return of Darth Plagueis is imminent...
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a href="https://www.netflix.com" target="_blank">
            Play on Netflix <Icon name='play circle' />
          </a>
        </Card.Content>
      </Card>
    </div>
  </div>
  )
}

export default Filter
