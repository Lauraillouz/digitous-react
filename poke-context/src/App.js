import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

// Components
import Home from "./components/Home";
import Login from "./components/Login";
import Error404 from "./components/Error404";

//CSS
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
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
