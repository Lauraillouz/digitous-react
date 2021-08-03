import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// CSS
import "./App.css";
// Import json file
import data from "./data.json";
// Components + Views
import Home from "./views/Home";
import Film from "./views/Film";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: data,
    };
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <Home {...props} data={this.state.data} />}
          />
          <Route
            path="/film/:id"
            render={(props) => <Film {...props} data={this.state.data} />}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
