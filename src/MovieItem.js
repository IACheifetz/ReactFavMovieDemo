import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { add2WatchList } from './services/supabase-utils';


export default function MovieItem(movie) {



    async function handleClick() {
        if (isOnWatchList(movie.id)) {

        } else {
            add2WatchList(movie.id);
        }
    }

    <div
        onClick={handleClick}>
        <p> {movie.title} </p>
        <p> {movie.overview}</p>
        <img src={movie.poster_path} />
    </div>
}