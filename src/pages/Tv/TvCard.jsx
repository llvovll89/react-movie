import React from 'react'
import './Tv.css'

const getPoster = (posterpath) => {
    return `https://www.themoviedb.org/t/p/w220_and_h330_face${posterpath}`
}

function TvCard({poster_path, name, first_air_date}) {
  return (
    <div className="tv-card">
        <img src={getPoster(poster_path)} alt={name} />
        <div className="card-content">
            <h1 className="card-name">{name}</h1>
            <p className="card-date">{first_air_date}</p>
        </div>
    </div>
  )
}
  
export default TvCard