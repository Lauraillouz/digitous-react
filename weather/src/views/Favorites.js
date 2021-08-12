import { useContext, useEffect } from "react";
import { FavoritesContext } from "../App";

const Favorites = () => {
  const favoriteCitiesState = useContext(FavoritesContext);

  const removeFromFavorites = () => {
    console.log(favoriteCitiesState.favoriteCities);
    let index = favoriteCitiesState.favoriteCities;
    if (index !== -1) {
      favoriteCitiesState.favoriteCities.splice(index, 1);
    }
    favoriteCitiesState.setFavoriteCities(index);
  };

  return (
    <div>
      <h2>Favorites</h2>
      <div>
        {favoriteCitiesState.favoriteCities.map((favoriteCity) => {
          return (
            favoriteCity.id && (
              <div key={favoriteCity.id}>
                <p>City: {favoriteCity.city}</p>
                <p>
                  Temperature:
                  {Math.floor(parseInt(favoriteCity.temperature) - 273.15) +
                    " °C"}
                </p>
                <p>Weather: {favoriteCity.weather}</p>
                <button type="button" onClick={removeFromFavorites}>
                  Remove from favorites
                </button>
              </div>
            )
          );
        })}
      </div>
    </div>
  );
};

export default Favorites;
