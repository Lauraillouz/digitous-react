import { useState, useEffect } from "react";
// Component
import Card from "../components/Card";

const URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=446011991554d3f0bb6bdf42b91d408e";

const Popular = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      fetch(`${URL}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data.results);
          setMovies(data.results);
        });
    };
    getMovies();
  }, []);

  return (
    <div>
      <h1 className="m-4">Popular</h1>
      <Card movies={movies} />
    </div>
  );
};

export default Popular;
