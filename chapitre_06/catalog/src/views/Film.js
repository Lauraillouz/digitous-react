import React from "react";

class Film extends React.Component {
  render() {
    return (
      <div>
        {this.props.data
          .filter((film) => film.id.toString() === this.props.match.params.id)
          .map((film) => {
            return (
              <div key={film.id}>
                <div>
                  <h1>{film.title}</h1>
                  <h3>by {film.director}</h3>
                  <h5>
                    Casting:{" "}
                    {film.stars.map((star) => {
                      return film.stars[star.length - 1]
                        ? `${star}, `
                        : `${star}.`;
                    })}
                  </h5>
                </div>

                <img src={film.image} alt={film.title}></img>
                <p>Synospis:</p>
                <p>{film.description}</p>
              </div>
            );
          })}
      </div>
    );
  }
}

export default Film;
