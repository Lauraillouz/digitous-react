import { useState, useEffect } from "react";

const API_KEY = "446011991554d3f0bb6bdf42b91d408e";

const Favorites = () => {
  const [movies, setMovies] = useState([]);
  const [favIDs, setFavIDs] = useState([]);

  const getMovie = (id) => {
    fetch(`http://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((movie) => {
        setMovies((prevState) => [...prevState, movie]);
      });
  };

  useEffect(() => {
    favIDs.forEach((id) => getMovie(id));
  }, [favIDs]);

  useEffect(() => {
    setFavIDs(JSON.parse(localStorage.getItem("favorites")));
  }, []);

  return (
    <div>
      <h1 className="m-4">Favorites</h1>
      <div className="d-flex flex-wrap justify-content-center">
        {movies.map((movie) => (
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
        ))}
      </div>
    </div>
  );
};

export default Favorites;
