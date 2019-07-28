import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return the correct
    movieData.map((data) => {
      <MovieCard title={title} posterSrc={posterURL} genres={genresArr}
      const title = data.title;
      const rating = data.IMDBRating;
      const genresArr = data.genres;
      const poster = data.poster;
      <MovieCard title={title} poster={poster} genres={genresArr} rating={rating} />

    })
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
