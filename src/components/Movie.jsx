import React, { useState } from "react";
import '../css/Movie.css'

export const Movie = (props) => {
    const API_IMG = "https://image.tmdb.org/t/p/w500"
    const [view, setView] = useState(false);

    return (
        <div className="container">
            <div className={view ? "mist" : "movie-poster"} onClick={() => {setView(!view)}}>
                <img src={API_IMG + props.poster_path} alt="poster.." />
            </div>

            <div className={view ? "view" : "off"}>
                <div className="movie-info">
                    <p className="title">{props.title}</p>
                    <p className="vote">평점 <span className="red">{props.vote_average}</span></p>
                    <p className="day">개봉일 {props.release_date}</p>
                </div>

                <div className="info-hover">
                    <span className="overview">{props.overview}</span>
                </div>
                </div>

        </div>
    )
}