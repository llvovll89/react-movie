import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TvCard from './TvCard';
import './Tv.css';
import { v4 as uuid } from 'uuid';

function Tvtop() {
  const [tvMovie, setTvMovie] = useState([]);
  const API_KEY = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=kor&page=1`
      )
      .then((res) => {
        setTvMovie(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="tv-container">
      {tvMovie.map((tv) => {
        return <TvCard key={uuid()} {...tv} />;
      })}
    </div>
  );
}

export default Tvtop;
