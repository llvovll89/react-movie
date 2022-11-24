import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Movie } from "./Movie";
import { v4 as uuid } from 'uuid';
import { FaSearch , FaPlay } from "react-icons/fa";
import '../css/Navbar.css'

export const Navbar = () => {
    const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=81dcb16b2b29c9eea6cdc5e7b5a42358";
    const API_SEARCH = "http://api.themoviedb.org/3/search/movie?api_key=81dcb16b2b29c9eea6cdc5e7b5a42358&query=";

    const [movies, setMovies] = useState([]);
    const [inputVal, setInputVal] = useState('');

    useEffect(() => {
        fetch(API_URL)
            .then(res => res.json())
            .then(data => setMovies(data.results))
    }, []);

    const searchSubmit = (e) => {
        e.preventDefault();

        fetch(API_SEARCH + inputVal)
            .then(res => res.json())
            .then(data => setMovies(data.results))
            .catch(err => console.log(err));

        setInputVal('');
    }

    const handelChange = (e) => {
        setInputVal(e.target.value);
    }

    return (
        <div className="navbar">
            <div className="content">
                <div className="title">
                    <h1>React</h1>
                    <span>MovieApp</span>
                </div>

                <form id="search-form" onSubmit={searchSubmit}>
                    <input className="search" type="text" value={inputVal} onChange={handelChange} placeholder="영화검색..." />
                    <button className="search-btn"><FaSearch /></button>
                </form>
            </div>

            <div className="notice">
                <div className="inner">
                    <Link to='/notice'>공지사항 | 클릭해서 읽어주세요 <span className="click"><FaPlay/></span></Link>
                </div>
            </div>

            <div className="movie-container">
                {movies && movies.map((movie) => (
                    <Movie key={uuid()} {...movie} />
                ))}
            </div>

        </div>
    )
}