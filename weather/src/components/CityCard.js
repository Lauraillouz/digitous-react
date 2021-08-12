import { useContext } from "react";
import { FavoritesContext } from "../App";

const CityCard = () => {
  const favoriteCitiesState = useContext(FavoritesContext);

  const removeFromFavorites = (id) => {
    let newFavCities = favoriteCitiesState.favoriteCities.filter(
      (cityObject) => cityObject.id !== id
    );
    favoriteCitiesState.setFavoriteCities(newFavCities);
  };

  return (
    <div>
      {favoriteCitiesState.favoriteCities.map((favoriteCity) => {
        return (
          <div key={favoriteCity.id}>
            <p>City: {favoriteCity.city}</p>
            <p>
              Temperature:
              {Math.floor(parseInt(favoriteCity.temperature) - 273.15) + " °C"}
            </p>
            <p>Weather: {favoriteCity.weather}</p>
            <button
              type="button"
              onClick={() => removeFromFavorites(favoriteCity.id)}
            >
              Remove from favorites
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default CityCard;
