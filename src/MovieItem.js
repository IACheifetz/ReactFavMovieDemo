import React from 'react';
import { add2WatchList, removeFromWatchList } from './services/supabase-utils';

export default function MovieItem({ watchList, movie, isOnWatchList, refreshWatchList }) {
  async function handleClick() {
    if (isOnWatchList(movie.id, watchList)) {
      await removeFromWatchList(movie.id);
    } else {
      await add2WatchList(movie.id, movie.title, movie.poster_path, movie.overview);
      console.log(movie.id);
      console.log('test1');
    }
    await refreshWatchList();
    console.log(isOnWatchList(movie.id, watchList));
  }

  return (
    <div
      className="movie-card"
      // really does need to display differently if its on the watch list
    >
      <p> {movie.title} </p>
      <p> {movie.overview}</p>
      <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} />
      {isOnWatchList(movie.id, watchList) ? (
        <button onClick={handleClick}>Remove from Watchlist</button>
      ) : (
        <button onClick={handleClick}>Add to Watchlist</button>
      )}
    </div>
  );
}
