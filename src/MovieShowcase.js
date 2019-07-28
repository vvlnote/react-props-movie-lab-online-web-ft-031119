import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return the correct
    const movieCards = movieData.map((data) => {
      <MovieCard title={data.title} poster={data.poster} genres={data.genres} rating={data.IMDBRating} />
    });
    return movieCards;
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
