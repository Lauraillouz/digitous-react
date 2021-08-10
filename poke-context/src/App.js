import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

// Components
import Home from "./components/Home";
import Login from "./components/Login";
import Error404 from "./components/Error404";

//CSS
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <BrowserRouter>
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
          </ul>
        </div>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="*" component={Error404} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
