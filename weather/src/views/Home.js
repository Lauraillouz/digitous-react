import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { FavoritesContext } from "../App";
import styled from "styled-components";

const API_KEY = "671d055643a6eb59b7142a143bfc725d";

const Background = styled.div`
  background-image: ${(props) => {
    switch (props.weather) {
      case "Rain":
        return "url('./img/rain.jpeg')";
      case "Clouds":
        return "url('./img/clouds.jpeg')";
      case "Clear":
        return "url('./img/sun.jpeg')";
      case "Snow":
        return "url('./img/snow.jpeg')";
      case "Mist":
        return "url('./img/mist.jpeg')";
      case "Thunderstorm":
        return "url('./img/thunderstorm.jpeg')";
      default:
        console.log("sorry", props.weather);
    }
  }};
`;

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
        setWeather(res.weather[0].main);
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
    <Background
      weather={weather ? weather : ""}
      style={{
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        padding: "50px",
      }}
    >
      <div>
        <h2 className="title p-20">Home</h2>

        <form
          className="flex justifyCenter mb-100"
          onSubmit={handleSubmit(getCity)}
        >
          <input
            className="border"
            type="text"
            {...register("city", { required: true })}
          />
          {errors.city && <p>City is required.</p>}
          <input className="btn border" type="submit" />
        </form>

        {city && weather && temperature ? (
          <div className="mt-30 cityCard">
            <p className="m-10 center">City: {city}</p>
            <hr></hr>
            <p className="m-10 center">
              Temperature: {Math.floor(parseInt(temperature) - 273.15) + " °C"}
            </p>
            <hr></hr>
            <p className="m-10 center">Weather: {weather}</p>
            <div className="flex justifyCenter">
              <button
                className="btn border center"
                type="button"
                onClick={saveAsFavorite}
              >
                Save as favorite
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </Background>
  );
};

export default Home;
