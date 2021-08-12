import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { useState, createContext } from "react";

// Components
import Home from "./components/Home";
import Login from "./components/Login";
import Error404 from "./components/Error404";

//CSS
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const UserContext = createContext();
export const PokemonContext = createContext([]);

const App = () => {
  const [isLogged, setLogged] = useState(false);
  const [savedPokemons, setSavedPokemons] = useState([]);

  const setAuth = () => {
    setLogged((prev) => !prev);
  };

  const reset = () => {
    setLogged(false);
    setSavedPokemons([]);
  };

  const handleClick = () => {
    isLogged ? reset() : setAuth();
  };

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ isLogged: isLogged, setAuth: setAuth }}>
        <PokemonContext.Provider value={{ savedPokemons, setSavedPokemons }}>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
                <li>
                  {isLogged ? (
                    <button className="btn btn-info ms-3" onClick={handleClick}>
                      Log out
                    </button>
                  ) : (
                    <Link
                      className="text-decoration-none text-dark"
                      to="/login"
                    >
                      <button className="btn btn-info ms-3">Log in</button>
                    </Link>
                  )}
                </li>
              </ul>
            </div>
          </nav>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="*" component={Error404} />
          </Switch>
        </PokemonContext.Provider>
      </UserContext.Provider>
    </BrowserRouter>
  );
};

export default App;
