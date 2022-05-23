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
      onClick={handleClick}>
      <p> {movie.title} </p>
      <p> {movie.overview}</p>
      <img src={movie.poster_path} />
    </div>
  );
}