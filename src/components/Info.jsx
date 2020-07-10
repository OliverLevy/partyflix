import React from "react";
import "./Info.scss";
import { Link } from "react-router-dom";
import playbtn from "../assets/icons/Icon-play.svg";
import infobtn from "../assets/icons/Icon-info.svg";
import backbtn from "../assets/icons/Icon-back-arrow.svg";

const posterLarge = "http://image.tmdb.org/t/p/original";

export default function Info(props) {
  if (props.movieGallery.results === undefined || props.genres.length === 0) {
    return <h3>loading...</h3>;
  } else {
    console.log(props.genres);
    const pageId = props.match.params.id;
    const list = props.movieGallery.results;
    const output = list.filter((item) => item.id == pageId);
    const movie = output[0];
    console.log(movie);
    const allGenres = props.genres;
    const currentGenres = movie.genre_ids;

    const movieGenres = currentGenres.map((item) => {
      let output = allGenres.filter((genre) => genre.id === item);
      return (
        <p key={output[0].id} className="info__genres">
          {output[0].name}
        </p>
      );
    });

    console.log(movieGenres);
    return (
      <div>
        <Link to="/" className='info__link'>
          <img src={backbtn} alt="" />
          <h1 className="info__title">{movie.title}</h1>
        </Link>
        <div className="info">
          <div className="info__text">
          <h4>Genres</h4>
            <div className="info__genres-container">
              
              {movieGenres}
            </div>
            <h4>Overview</h4>
            <div className="info__overview">
              
              <p>{movie.overview}</p>
            </div>
            <div className="info__release-date-container">
              <h4 className="info__release-date-header">Release Date</h4>
              <p className="info__release-date">{movie.release_date}</p>
            </div>
            <h4>Ratings</h4>
            <div className='info__ratings'>
            <p>{movie.vote_average}/10</p>
            <p>{movie.vote_count} people reviewed this</p>
            </div>
            <div className="gallery__btn">
              <h4>ADD TO WATCHLIST</h4>
            </div>
          </div>
          <div className="info__img-container">
            <img
              className="info__img"
              src={`${posterLarge}${movie.backdrop_path}`}
              alt="movie poster"
            />
          </div>
        </div>
      </div>
    );
  }
}
