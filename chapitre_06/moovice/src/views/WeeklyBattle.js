import React from "react";

// Module
import moment from "moment";

const API_KEY = "446011991554d3f0bb6bdf42b91d408e";

class WeeklyBattle extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      currentBattle: 0,
    };
  }

  componentDidMount() {
    this.getMovies();
  }

  getMovies = () => {
    let TODAY = moment().format("YYYY-MM-DD");
    let LAST_WEEK = moment().subtract(7, "days").format("YYYY-MM-DD");

    fetch(
      `http://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${LAST_WEEK}&primary_release_date.lte=${TODAY}&api_key=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          movies: data.results,
        });
      });
  };

  handleClick = (movie) => {
    if (this.state.currentBattle === this.state.movies.length - 2) {
      alert("No more movies to vote for!");
    } else {
      this.setState((prevState) => ({
        ...prevState,
        currentBattle: prevState.currentBattle + 2,
      }));
    }
    this.saveMovie(movie);
  };

  saveMovie = (movie) => {
    let storedMovie = JSON.parse(localStorage.getItem("favorites") || "[]");
    storedMovie.push(movie.id);
    localStorage.setItem("favorites", JSON.stringify(storedMovie));
  };

  render() {
    return (
      <div>
        <h1 className="m-4">Weekly Battle</h1>
        <div className="d-flex flex-wrap justify-content-center">
          {this.state.movies
            .slice(this.state.currentBattle, this.state.currentBattle + 2)
            .map((movie) => {
              return (
                <div
                  className="m-4"
                  onClick={() => this.handleClick(movie)}
                  key={movie.id}
                >
                  <div
                    className="card"
                    style={{ width: "18rem", height: "50rem" }}
                  >
                    <img
                      className="card-img-top"
                      src={`http://image.tmdb.org/t/p/w300${movie.poster_path}`}
                      alt={movie.title}
                    ></img>
                    <div className="card-body">
                      <p style={{ fontWeight: "bold" }}>{movie.title}</p>
                      <p>{movie.release_date}</p>
                      <p style={{ fontSize: "0.75rem" }}>{movie.overview}</p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default WeeklyBattle;
