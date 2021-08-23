import { useState, useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { FavoritesContext } from "../App";
// Style
import styled from "styled-components";
//Component
import Map from "../components/Map";

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
        console.log("not yet");
    }
  }};
`;

const Home = () => {
  const favoriteCitiesState = useContext(FavoritesContext);

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");
  const [temperature, setTemperature] = useState("");
  const [id, setId] = useState(0);
  const [defaultCity, setDefaultCity] = useState("");
  const [check, setCheck] = useState(false);
  const [coord, setCoord] = useState([]);

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
        setCoord([res.coord.lat, res.coord.lon]);
        setCity(res.name);
        setTemperature(res.main.temp);
        setWeather(res.weather[0].main);
        setId(res.id);
      });
  };
  console.log("coord in Home", coord);

  const saveAsDefault = () => {
    localStorage.setItem(
      "defaultCity",
      JSON.stringify({ city, weather, temperature, id, coord })
    );
    setDefaultCity(JSON.parse(localStorage.getItem("defaultCity")));
  };

  useEffect(() => {
    setDefaultCity(JSON.parse(localStorage.getItem("defaultCity")));
    setWeather(JSON.parse(localStorage.getItem("defaultCity")).weather);
  }, []);

  useEffect(() => {
    setCheck(false);
  }, [city, defaultCity]);

  const checkUncheck = () => {
    setCheck(true);
    saveAsDefault();
  };

  const saveAsFavorite = () => {
    if (
      favoriteCitiesState.favoriteCities.length < 3 &&
      !favoriteCitiesState.favoriteCities.includes(
        favoriteCitiesState.favoriteCities.id
      )
    ) {
      favoriteCitiesState.setFavoriteCities((prev) => [
        ...prev,
        { city, weather, temperature, id },
      ]);
    }
  };

  return (
    <Background
      value={{ weather, setWeather }}
      weather={weather ? weather : ""}
      style={{
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        padding: "50px",
      }}
    >
      <div>
        <h2 className={!weather ? "defaultTitle p-20" : "title p-20"}>Home</h2>

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

        {city && weather && temperature && coord ? (
          <div className="mt-30 cityCard">
            <Map coord={coord} />

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
                onClick={() => saveAsFavorite()}
              >
                Save as favorite
              </button>
            </div>
            <div className="flex justifyCenter">
              <input
                onClick={() => checkUncheck()}
                type="checkbox"
                id="defaultCity"
                name="defaultCity"
                defaultChecked={check}
              />
              <label className="ms-10" htmlFor="defaultCity">
                Default City
              </label>
            </div>
          </div>
        ) : (
          <div className="mt-30 cityCard">
            <Map coord={defaultCity.coord} />
            <p className="m-10 center">City: {defaultCity.city}</p>
            <hr></hr>
            <p className="m-10 center">
              Temperature:{" "}
              {Math.floor(parseInt(defaultCity.temperature) - 273.15) + " °C"}
            </p>
            <hr></hr>
            <p className="m-10 center">Weather: {defaultCity.weather}</p>
            <div className="flex justifyCenter">
              <button
                className="btn border center"
                type="button"
                onClick={() => saveAsFavorite()}
              >
                Save as favorite
              </button>
            </div>
            <div className="flex justifyCenter">
              <input
                onClick={() => saveAsDefault()}
                type="checkbox"
                id="defaultCity"
                name="defaultCity"
                defaultChecked={check}
              />
              <label className="ms-10" htmlFor="defaultCity">
                Default City
              </label>
            </div>
          </div>
        )}
      </div>
    </Background>
  );
};

export default Home;
