import React from 'react';
import MovieItem from './MovieItem.js';

export default function MovieList({ movies }) {
  return <div className='movies-list'>
    { 
      movies.map(movie => <MovieItem key={movie.id} {...movie} />)
    }

  </div>;
}