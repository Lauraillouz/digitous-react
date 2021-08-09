import { useEffect, useState } from "react";

function randomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

const Home = () => {
  const [pokemon, setPokemon] = useState({});
  /*   const [newPokemon, setNewPokemon] = useState(); */

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/1")
      .then((res) => res.json())
      .then((res) => {
        setPokemon(res);
      });
  }, []);

  const getPokemon = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber()}`)
      .then((res) => res.json())
      .then((res) => {
        setPokemon(res);
      });
  };

  return (
    <div>
      <h2>Home</h2>
      <button onClick={getPokemon}>Get a Pokemon</button>
      <p>Name: {pokemon.name}</p>
      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
      <p>Type: {pokemon.type}</p>
    </div>
  );
};

export default Home;
