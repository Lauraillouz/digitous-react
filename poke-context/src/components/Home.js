import { useEffect, useState } from "react";
import { UserContext } from "../App";

function randomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

const Home = () => {
  const [pokemon, setPokemon] = useState({});
  /*   const [newPokemon, setNewPokemon] = useState(); */

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/1")
      .then((res) => res.json())
      .then((res) => setPokemon(res));
  }, []);

  const getPokemon = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber()}`)
      .then((res) => res.json())
      .then((res) => setPokemon(res));
  };

  return (
    <div className="bg-dark text-light text-center container-fluid p-5">
      <h2>Home</h2>
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
  );
};

export default Home;
