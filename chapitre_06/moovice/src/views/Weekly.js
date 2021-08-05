import React from "react";
// Component
import Card from "../components/Card";

// Module
import moment from "moment";

const API_KEY = "446011991554d3f0bb6bdf42b91d408e";

class Weekly extends React.Component {
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
    let TODAY = moment();
    let LAST_WEEK;
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

  render() {
    return (
      <div>
        <h1 className="m-4">Weekly</h1>
        <Card movies={this.state.movies} />
      </div>
    );
  }
}

export default Weekly;
