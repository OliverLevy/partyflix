import React from 'react';
import './videoplayer.scss';
import image1 from "../../assets/images/1.jpg"
import image2 from "../../assets/images/2.jpg"
import image3 from "../../assets/images/3.jpg"
import image4 from "../../assets/images/4.jpg"
import image5 from "../../assets/images/5.jpg"
import play from "../../assets/icons/Icon-play.svg"
import pause from "../../assets/icons/Icon-pause.svg"
import scrubber from "../../assets/icons/Icon-scrubber-control.svg"



const posterLarge = 'http://image.tmdb.org/t/p/original'

export default class VideoPlayer extends React.Component {


  render() {
    const list = this.props.movieGallery;
    if (list.length === 0) {
      return <h2>loading...</h2>;
    } else {
      const currentVideoId = this.props.match.params.id;
      const videoList = list.results;
      const output = videoList.filter((item) => item.id === Number(currentVideoId));
      const vid =output[0]
      console.log(output);
      return (
        <div className="player">
          <h1 className="player__header">{vid.title}</h1>
        <div className="player__container1">
          <div className="player__video">
          <img className="player__video--poster"src={posterLarge + vid.backdrop_path} alt=""/>
          </div>
          <div className="player__viewers">
            <img className="player__viewers--image" src={image1} alt=""/>
            <img className="player__viewers--image" src={image2} alt=""/>
            <img className="player__viewers--image" src={image3} alt=""/>
            <img className="player__viewers--image" src={image4} alt=""/>
            <img className="player__viewers--image" src={image5} alt=""/>
          </div>
        </div>
        <div className="player__container2">
          <div className="player__controls">
          <img className="player__controls--img" src={play} alt=""/>
          <img className="player__controls--img" src={pause} alt=""/>
          <img className="player__controls--img" src={scrubber} alt=""/>

          </div>
          <div className="player__chat">
              <h2 className="play__chat--header" >Chat Now</h2>
              <p className="play__chat--content"><span>Jon:</span> Wow this movie is amazing! I am glad I can watch it with my best friends!</p>
              <p className="play__chat--content"><span>Lauren:</span> My favourite scene is coming up!</p>
              <p className="play__chat--content"><span>Lesley:</span> This movie has an amazing soundtrack</p>
              <p className="play__chat--content"><span>Eula:</span> @Lesley shouldn't we be marking assignments right now?</p>
              <form className="form">
              <input className="form__input" type="text" placeholder="write comment here"/>
              <button className="form__button">Submit</button>
              </form>
          </div>
        </div>
      </div>
      );
    }
  }
}
