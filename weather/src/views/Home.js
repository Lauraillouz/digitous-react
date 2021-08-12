import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { FavoritesContext } from "../App";

const API_KEY = "671d055643a6eb59b7142a143bfc725d";

const Home = () => {
  const favoriteCitiesState = useContext(FavoritesContext);

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");
  const [temperature, setTemperature] = useState("");
  const [id, setId] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const getCity = (cityInput) => {
    setCity(cityInput.city);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.city}&appid=${API_KEY}`
    )
      .then((res) => res.json())
      .then((res) => {
        setCity(res.name);
        setTemperature(res.main.temp);
        setWeather(res.weather[0].description);
        setId(res.id);
      });
  };

  const saveAsFavorite = () => {
    if (
      favoriteCitiesState.favoriteCities.length < 3 &&
      !favoriteCitiesState.favoriteCities.includes(city)
    ) {
      favoriteCitiesState.setFavoriteCities((prev) => [
        ...prev,
        { city, weather, temperature, id },
      ]);
    }
  };

  return (
    <div>
      <h2>Home</h2>

      <form onSubmit={handleSubmit(getCity)}>
        <input type="text" {...register("city", { required: true })} />
        {errors.city && <p>City is required.</p>}
        <input type="submit" />
      </form>

      {city && weather && temperature ? (
        <div>
          <p>City: {city}</p>
          <p>
            Temperature: {Math.floor(parseInt(temperature) - 273.15) + " °C"}
          </p>
          <p>Weather: {weather}</p>
          <button type="button" onClick={saveAsFavorite}>
            Save as favorite
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Home;
