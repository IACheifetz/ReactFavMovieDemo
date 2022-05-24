import React from 'react';
import MovieItem from './MovieItem.js';

export default function MovieList({ movies, refreshWatchList, isOnWatchList }) {
  return (
    <div className="movies-list">
      {movies.map((movie) => (
        <MovieItem
          key={movie.id}
          isOnWatchList={isOnWatchList}
          refreshWatchList={refreshWatchList}
          movie={movie}
        />
      ))}
    </div>
  );
}
