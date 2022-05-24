import React, { useState, useEffect } from 'react';
import MovieList from './MovieList';
import { searchMovies } from './services/fetch-utils';
import { getWatchList, logout } from './services/supabase-utils';

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [watchList, setWatchList] = useState([]);

  async function handleSubmitSearch(e) {
    e.preventDefault();
    const results = await searchMovies(searchTerm);
    console.log(searchTerm);
    setSearchResults(results);
    console.log(results);
  }

  function isOnWatchList(api_id) {
    const match = watchList.find(item => Number(item.api_id) === Number(api_id));

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
      <form onSubmit={handleSubmitSearch} className='search'>
        <input value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
        <button>Submit</button>
      </form>
      <div className='movieSearch'>
        <MovieList movies={searchResults} isOnWatchList={isOnWatchList} refreshWatchList={refreshWatchList} />
      </div>
    </div>
  );
}