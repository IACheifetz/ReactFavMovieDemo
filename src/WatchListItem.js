import React from 'react';
import { removeFromWatchList } from './services/supabase-utils';

export default function WatchListItem(movie) {
  async function handleClick() {
    await removeFromWatchList(movie.movie.api_id);
    await movie.refreshWatchList();
  }

  return (
    <div className='movie'>
      <div className="watchlist-card">
        <p> {movie.movie.title} </p>
        <p> {movie.movie.overview}</p>
        <img src={`https://image.tmdb.org/t/p/w200/${movie.movie.poster_path}`} />
        <div>
          <button onClick={handleClick}>Remove from Watchlist</button>
        </div>
      </div>
    </div>

  );
}
