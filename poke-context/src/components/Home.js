import { useEffect, useState, useContext, createContext } from "react";
import { UserContext } from "../App";

const randomNumber = () => {
  return Math.floor(Math.random() * 100) + 1;
};

const PokemonContext = createContext([]);

const Home = () => {
  const isLoggedState = useContext(UserContext);
  const pokemonState = useContext(PokemonContext);

  const [pokemon, setPokemon] = useState({});
  const [savedPokemons, setSavedPokemons] = useState(pokemonState);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/1")
      .then((res) => res.json())
      .then((res) => setPokemon(res));
  }, []);

  const getPokemon = () => {
    const id = randomNumber();
    const index = savedPokemons.findIndex((element) => element.id === id);
    if (index === -1) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((res) => res.json())
        .then((res) => setPokemon(res));
    } else {
      setPokemon(savedPokemons[index]);
    }
  };

  useEffect(() => {
    const savePokemon = () => {
      if (savedPokemons !== undefined && !savedPokemons.includes(pokemon)) {
        setSavedPokemons([...savedPokemons, pokemon]);
      }
    };
    savePokemon();
  }, [pokemon]);

  return (
    <div className="bg-dark text-light text-center container-fluid p-5">
      <h2>Home</h2>
      <PokemonContext.Provider
        value={{
          savedPokemons,
          setSavedPokemons,
        }}
      >
        {isLoggedState.isLogged ? (
          <div>
            <button className="btn btn-info ps-5 pe-5" onClick={getPokemon}>
              Get a Pokemon
            </button>
            <ul className="list-group list-group-flush ">
              <li className="list-group-item bg-dark">
                <p className="mt-5 text-light">Name: {pokemon.name}</p>
              </li>
              <li className="list-group-item bg-dark">
                <p className="text-light">Height: {pokemon.height}</p>
              </li>
              <li className="list-group-item bg-dark">
                <p className="text-light">Weight: {pokemon.weight}</p>
              </li>
              <li className="list-group-item bg-dark">
                <p className="mb-5 text-light">Type: {pokemon.type}</p>
              </li>
            </ul>
          </div>
        ) : (
          "You need to be logged in."
        )}
      </PokemonContext.Provider>
    </div>
  );
};

export default Home;
