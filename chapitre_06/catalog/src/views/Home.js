import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to the Movie Catalog</h1>
        {this.props.data.map((film) => {
          return (
            <div key={film.id}>
              <div>
                <Link to={`/film/${this.props.id}`}>{film.title}</Link>
              </div>

              <img src={film.image} alt={film.title}></img>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Home;
