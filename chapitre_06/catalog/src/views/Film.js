import React from "react";

class Film extends React.Component {
  render() {
    return (
      <div className="main">
        {this.props.data
          .filter((film) => film.id.toString() === this.props.match.params.id)
          .map((film) => {
            return (
              <div className="flexColumn" key={film.id}>
                <div className="flexNoWrap">
                  <div className="titleWithDirector">
                    <h1 className="movieTitle">{film.title}</h1>
                    <h3>by {film.director}</h3>
                  </div>

                  <h5 className="marginBottom">
                    Casting:{" "}
                    {film.stars.map((star) => {
                      return film.stars[star.length - 1]
                        ? `${star}, `
                        : `${star}.`;
                    })}
                  </h5>
                </div>

                <img
                  className="resizeImage"
                  src={film.image}
                  alt={film.title}
                ></img>
                <p className="marginTop marginBottom">Synospis:</p>
                <p className="restrict">{film.description}</p>
              </div>
            );
          })}
      </div>
    );
  }
}

export default Film;
