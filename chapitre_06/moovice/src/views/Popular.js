import React from "react";

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
    console.log(this.state.movies);
  }

  getMovies = () => {
    fetch(`${URL}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          movies: [data.results],
        });
      });
  };

  render() {
    return <div>Popular</div>;
  }
}

export default Popular;
