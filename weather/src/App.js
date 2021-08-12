// React
import { BrowserRouter, Switch, Route } from "react-router-dom";
// Components
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
//Views
import Home from "./views/Home";
import Favorites from "./views/Favorites";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/favorites" component={Favorites} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;