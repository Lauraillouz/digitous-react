import { BrowserRouter, Route, Switch } from "react-router-dom";
// Components
import Home from "./views/Home";
import Navbar from "./components/Navbar";
import Weekly from "./views/Weekly";
import WeeklyBattle from "./views/WeeklyBattle";
import Popular from "./views/Popular";
import PopularBattle from "./views/PopularBattle";
import Favorites from "./views/Favorites";
// CSS
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/weekly" component={Weekly} />
        <Route exact path="/weekly-battle" component={WeeklyBattle} />
        <Route exact path="/popular" component={Popular} />
        <Route exact path="/popular-battle" component={PopularBattle} />
        <Route exact path="/favorites" component={Favorites} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
