import React from "react";
import Card from "../components/Card";

const URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=446011991554d3f0bb6bdf42b91d408e";

class Popular extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    this.getMovies();
  }

  getMovies = () => {
    fetch(`${URL}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          movies: data.results,
        });
      });
  };

  render() {
    return (
      <div>
        <h1 className="m-4">Popular</h1>
        <Card movies={this.state.movies} />
      </div>
    );
  }
}

export default Popular;
