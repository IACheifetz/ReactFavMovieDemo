import React, { useState, useEffect } from 'react';
import WatchListItem from './WatchListItem';
import { getWatchList } from './services/supabase-utils';

export default function WatchList() {
  const [watchList, setWatchList] = useState([]);
  
  async function refreshWatchList() {
    const myWatchList = await getWatchList();
    setWatchList(myWatchList);
  }

  useEffect(() => {
    refreshWatchList();
  }, []);

  return (
    <div className='watch-list'>
      {watchList.map((movie) => (
        <WatchListItem
          key={movie.id}
          refreshWatchList={refreshWatchList}
          movie={movie}
        />
      ))}
    </div>
  );
}
