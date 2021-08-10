import { useState, useEffect } from "react";
// Component
import Card from "../components/Card";

// Module
import moment from "moment";

const API_KEY = "446011991554d3f0bb6bdf42b91d408e";

const Weekly = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      let TODAY = moment().format("YYYY-MM-DD");

      let LAST_WEEK = moment().subtract(7, "days").format("YYYY-MM-DD");
      fetch(
        `http://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${LAST_WEEK}&primary_release_date.lte=${TODAY}&api_key=${API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => {
          setMovies(data.results);
        });
    };
    getMovies();
  });

  return (
    <div>
      <h1 className="m-4">Weekly</h1>
      <Card movies={movies} />
    </div>
  );
};

export default Weekly;
