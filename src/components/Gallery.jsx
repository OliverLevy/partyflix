import React from "react";
import "./Gallery.scss";
import { Link } from "react-router-dom";
import playbtn from "../assets/icons/Icon-play.svg";
import infobtn from "../assets/icons/Icon-info.svg";

const posterSmall = "http://image.tmdb.org/t/p/w300";
const posterLarge = "http://image.tmdb.org/t/p/original";

export default class Gallery extends React.Component {
  render() {
    const list = this.props.list.results;
    const genreList = this.props.genres;
    if (this.props.list.length === 0 && this.props.genres.length === 0) {
      return <h3>loading</h3>;
    } else {
      return (
        <div>
          <h2>Pick a movie!</h2>

          <div className="gallery">
            {list.map((item) => {
              // console.log("genre list", genreList)
              const currentMovieGenres = item.genre_ids;
              // console.log("current movie genre", currentMovieGenres)
              const movieGenre = currentMovieGenres.map((genreId) => {
                let output = genreList.filter(
                  (genreItem) => genreItem.id === genreId
                );

                return output;
              });

              if (movieGenre[0].length !== 0) {
                let genreOutput = movieGenre.map((item) => {
                  return (
                    <p className="gallery__item-genres" key={item[0].id}>
                      {item[0].name}
                    </p>
                  );
                });
                

                return (
                  <div key={item.id} className="gallery__item">
                    <div className="gallery__item-link">
                      <img
                        className="gallery__item-img"
                        src={`${posterSmall}${item.backdrop_path}`}
                        alt={item.title}
                      />

                      <div className="gallery__item-info">
                        <div className="gallery__info-container">
                          <h2 className="gallery__item-title">{item.title}</h2>
                          <div className="gallery__item-release-date">
                            <h5>Realease Date</h5>
                            <p>{item.release_date}</p>
                          </div>

                          <div className="gallery__item-genres-container">
                            {genreOutput}
                          </div>
                        </div>

                        <div className="gallery__item-functions">
                          <Link
                            to={`/info/${item.id}`}
                            className="gallery__btn"
                          >
                            <img src={infobtn} alt="more info" />
                            <h4>LEARN MORE</h4>
                          </Link>
                          <Link
                            to={`/player/${item.id}`}
                            className="gallery__btn"
                          >
                            <img src={playbtn} alt="watch now button" />
                            <h4>WATCH NOW</h4>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      );
    }
  }
}
