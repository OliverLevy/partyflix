import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  BrowserRouter,
} from "react-router-dom";
import Gallery from "./components/Gallery";
import VideoPlayer from "./components/videoPlayer/VideoPlayer";

import Info from "./components/Info";
import axios from "axios";
import Navbar from "./components/navbar/Navbar";
import "./App.scss";

// use this doc set as refference https://developers.themoviedb.org/3/movies/get-movie-credits

const url = "https://api.themoviedb.org/3";
const api_key = "?api_key=24b5809ca6dc4a670e6e033f96229227";
const topRated = "/movie/top_rated";
const popular = "/movie/popular";
const latest = "/movie/latest";
const posterSmall = "http://image.tmdb.org/t/p/w300";
const posterLarge = "http://image.tmdb.org/t/p/original";

class App extends React.Component {
  state = {
    movieGallery: [],
    genres: [],
  };

  componentDidMount() {
    axios
      .get(`${url}${popular}${api_key}`)
      .then((suc) => {
        this.setState({
          movieGallery: suc.data,
        });
      })
      .catch((err) => console.error(err));

    axios
      .get(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=24b5809ca6dc4a670e6e033f96229227&language=en-US"
      )
      .then((suc) => {
        this.setState({ genres: suc.data.genres });
      })
      .catch((err) => console.error(err));
  }

  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <div className="main">
          <Switch>
            <Route
              path="/player/:id"
              render={(routerProps) => (
                <VideoPlayer
                  movieGallery={this.state.movieGallery}
                  {...routerProps}
                />
              )}
            />

            <Route path="/" exact>
              <Gallery
                list={this.state.movieGallery}
                genres={this.state.genres}
              />
            </Route>
            <Route path="/info/:id" render={(routerProps) => (
              <Info movieGallery={this.state.movieGallery} genres={this.state.genres} {...routerProps}/>
            )}>
              
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
