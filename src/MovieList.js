import React from 'react';
import MovieItem from './MovieItem.js';

export default function MovieList({ movies, watchList, refreshWatchList, isOnWatchList }) {
  return (
    <div className="movies-list">
      {movies.map((movie) => (
        <MovieItem
          key={movie.id}
          watchList={watchList}
          isOnWatchList={isOnWatchList}
          refreshWatchList={refreshWatchList}
          movie={movie}
        />
      ))}
    </div>
  );
}
