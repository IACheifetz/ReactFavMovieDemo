import React, { useState, useEffect } from 'react';
import MovieList from './MovieList';
import { searchMovies } from './services/fetch-utils';
import { getWatchList } from './services/supabase-utils';

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [watchList, setWatchList] = useState([]);

  async function handleSubmitSearch(e) {
    e.preventDefault();
    if (searchTerm) {
      //makes it not break if the search term is empty (aka the input form is blank)
      const results = await searchMovies(searchTerm);
      setSearchResults(results);
    }
  }

  function isOnWatchList(api_id, watchList) {
    const match = watchList.find((item) => Number(item.api_id) === Number(api_id));

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
      <form onSubmit={handleSubmitSearch} className="search">
        <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <button>Submit</button>
      </form>
      <div className="movieSearch">
        <MovieList
          movies={searchResults}
          watchList={watchList}
          isOnWatchList={isOnWatchList}
          refreshWatchList={refreshWatchList}
        />
      </div>
    </div>
  );
}
