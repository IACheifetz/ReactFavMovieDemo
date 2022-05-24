import React from 'react';
import { add2WatchList, removeFromWatchList } from './services/supabase-utils';

export default function MovieItem({ watchList, movie, isOnWatchList, refreshWatchList }) {
  async function handleClick() {
    if (isOnWatchList(movie.id, watchList)) {
      await removeFromWatchList(movie.id);
    } else {
      await add2WatchList(movie.id, movie.title, movie.poster_path, movie.overview);
    }
    await refreshWatchList();
  }

  return (
    <div className='movie'>
      {/* displays as either a watchlist card or a display card depending on whether the item is on the watchlist */}
      {isOnWatchList(movie.id, watchList) ? (
        <div className='watchlist-card'>
          <p> {movie.title} </p>
          <p> {movie.overview}</p>
          <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} />
          <button onClick={handleClick}>Remove from Watchlist</button>
        </div>
      ) : (
        <div className='movie-card'>
          <p> {movie.title} </p>
          <p> {movie.overview}</p>
          <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} />
          <button onClick={handleClick}>Add to Watchlist</button>
        </div>
      )}    
    </div>
  );
}
