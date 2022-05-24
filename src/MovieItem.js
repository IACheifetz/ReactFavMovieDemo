import React from 'react';
import { add2WatchList, removeFromWatchList } from './services/supabase-utils';

export default function MovieItem({ movie, isOnWatchList, refreshWatchList }) {
  async function handleClick() {
    if (isOnWatchList(movie.id)) {
      removeFromWatchList(movie.id);
    } else {
      add2WatchList(movie.id);
    }
    await refreshWatchList();
  }

  return (
    <div
      // really does need to display differently if its on the watch list
      onClick={handleClick}
    >
      <p> {movie.title} </p>
      <p> {movie.overview}</p>
      <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} />
    </div>
  );
}
