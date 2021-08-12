import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const API_KEY = "671d055643a6eb59b7142a143bfc725d";

const Home = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");
  const [temperature, setTemperature] = useState("");

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
      });
  };

  useEffect(() => {
    console.log(city);
    console.log(temperature);
    console.log(weather);
  }, [city, temperature, weather]);

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
        </div>
      ) : null}
    </div>
  );
};

export default Home;
