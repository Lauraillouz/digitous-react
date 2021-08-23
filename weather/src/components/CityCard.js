import { useContext } from "react";
import { FavoritesContext } from "../App";
import styled from "styled-components";

const Background = styled.div`
  background-image: ${(props) => {
    console.log(props.weather);
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
        console.log(props.weather);
    }
  }};
`;

const CityCard = () => {
  const favoriteCitiesState = useContext(FavoritesContext);
  console.log(favoriteCitiesState);

  const removeFromFavorites = (id) => {
    let newFavCities = favoriteCitiesState.favoriteCities.filter(
      (cityObject) => cityObject.id !== id
    );
    favoriteCitiesState.setFavoriteCities(newFavCities);
  };

  return (
    <div className="mt-30">
      {favoriteCitiesState.favoriteCities.map((favoriteCity) => {
        return (
          <div key={favoriteCity.id}>
            <Background
              weather={favoriteCity.weather ? favoriteCity.weather : ""}
              style={{
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                padding: "50px",
              }}
            >
              <div className="cityCard">
                <p className="m-10 center">City: {favoriteCity.city}</p>
                <hr></hr>
                <p className="m-10 center">
                  Temperature:
                  {Math.floor(parseInt(favoriteCity.temperature) - 273.15) +
                    " °C"}
                </p>
                <hr></hr>
                <p className="m-10 center">Weather: {favoriteCity.weather}</p>
                <div className="flex justifyCenter">
                  <button
                    className="btn border center"
                    type="button"
                    onClick={() => removeFromFavorites(favoriteCity.id)}
                  >
                    Remove from favorites
                  </button>
                </div>
              </div>
            </Background>
          </div>
        );
      })}
    </div>
  );
};

export default CityCard;
