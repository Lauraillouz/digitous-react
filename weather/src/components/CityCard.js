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
    <div className="mb-20 mt-30">
      {favoriteCitiesState.favoriteCities.map((favoriteCity) => {
        return (
          <div key={favoriteCity.id}>
            <p className="m-10 center">City: {favoriteCity.city}</p>
            <hr></hr>
            <p className="m-10 center">
              Temperature:
              {Math.floor(parseInt(favoriteCity.temperature) - 273.15) + " °C"}
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
        );
      })}
    </div>
  );
};

export default CityCard;
