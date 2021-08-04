import React from "react";

class PopularBattle extends React.Component {
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
        <h1>Popular Battle</h1>
      </div>
    );
  }
}

export default PopularBattle;
