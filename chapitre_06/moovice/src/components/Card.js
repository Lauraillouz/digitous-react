import React from "react";

class Card extends React.Component {
  render() {
    console.log(this.props.movies);
    return (
      <div>
        {this.props.movies.map((movie) => {
          return (
            <div key={movie.id}>
              <div className="d-flex">
                <div>
                  <img
                    src={`http://image.tmdb.org/t/p/w300${movie.poster_path}`}
                    alt={movie.title}
                  ></img>
                  <p>{movie.title}</p>
                  <p>{movie.release_date}</p>
                  <p>{movie.overview}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Card;
