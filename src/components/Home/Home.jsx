import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Movie } from '../Movie/Movie';
import { v4 as uuid } from 'uuid';
import { FaSearch } from 'react-icons/fa';
import './Home.css';
import List from '../List/List';
import { motion } from 'framer-motion';

export const Home = () => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const TV_SHOW = `https://api.themoviedb.org/3/tv/{tv_id}/images?api_key=${API_KEY}&language=en-US`
  console.log(TV_SHOW);
  const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ko`;
  const API_SEARCH = `http://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

  const [movies, setMovies] = useState([]);
  const [inputVal, setInputVal] = useState('');

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }, []);

  const searchSubmit = (e) => {
    e.preventDefault();

    fetch(API_SEARCH + inputVal)
      .then((res) => res.json())
      .then((data) => setMovies(data.results))
      .catch((err) => console.log(err));
    setInputVal('');
  };

  const handelChange = (e) => {
    setInputVal(e.target.value);
  };

  const handelClick = () => {
    window.location.reload();
  };

  return (
    <div className="home">
      <div className="content">
        <div className="nav-title" onClick={handelClick}>
          <h1>React</h1>
          <span>MovieApp</span>
        </div>

        <form id="search-form" onSubmit={searchSubmit}>
          <input
            className="search"
            type="text"
            value={inputVal}
            onChange={handelChange}
            placeholder="영화검색..."
          />
          <button className="search-btn">
            <FaSearch />
          </button>
        </form>
      </div>

      <div className="notice">
        <div className="inner">
          <Link to="/notice"> 공지사항 | 클릭해서 읽어주세요 ✓ </Link>
        </div>
      </div>

      <List />

      <motion.div
        className="movie-container"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 1.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        {movies && movies.map((movie) => <Movie key={uuid()} {...movie} />)}
      </motion.div>
    </div>
  );
};
