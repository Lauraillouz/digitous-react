import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div className="main">
        <h1>Welcome to the Movie Catalog</h1>
        <div className="flex flexWrap">
          {this.props.data.map((film) => {
            return (
              <div key={film.id}>
                <div className="spaceAround">
                  <Link className="link marginBottom" to={`/film/${film.id}`}>
                    {film.title}
                  </Link>

                  <img src={film.image} alt={film.title}></img>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Home;
