import React from "react";

class Card extends React.Component {
  render() {
    return (
      <div className="d-flex flex-wrap justify-content-center">
        {this.props.movies.map((movie) => {
          return (
            <div className="m-4" key={movie.id}>
              <div className="card" style={{ width: "18rem", height: "50rem" }}>
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
    );
  }
}

export default Card;
