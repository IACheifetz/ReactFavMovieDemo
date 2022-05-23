import React, { useState } from 'react';
import { searchMovies } from './services/fetch-utils';
import { logout } from './services/supabase-utils';

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [watchList, setWatchList] = useState([]);

  async function handleSubmitSearch(e) {
    e.preventDefault();
    const results = searchMovies(searchTerm);
    setSearchResults(results);    
  }

  function isOnWatchList(api_id) {
    const match = watchlist.find(item => Number(item.api_id) === Number(api_id));

    return Boolean(match);
}

  async function refreshWatchList() {
    const myWatchList = await getWatchList();
    setWatchList(myWatchList);
  }

  useEffect(() => {
    refreshWatchList();
  }, []);

  return (
    <div>
      <button onClick={logout}>Logout</button>
      <input value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
      <div className='movieSearch'>
        <MovieList movies={searchResults} isOnWatchList={isOnWatchList} refreshWatchList={refreshWatchList} />
        {/* if its not watched, when you click it, set it to watched. also refetch */}
      </div>
    </div>
  );
}