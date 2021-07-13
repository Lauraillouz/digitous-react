import React from "react";
// Components
import Counter from "./Components/Counter";
// CSS
import "./css/App.css";

class App extends React.Component {

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <Counter />
      </div>
    )
  }
}


export default App;
