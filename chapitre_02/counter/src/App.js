import React from "react";
// Components
import Button from "./Button";
// CSS
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    }
  }

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <h2>{this.state.count}</h2>
        <Button background="green" name="+" onClick={() => {
          this.setState({
            count: this.state.count + 1
          })
        }} />
        <Button background="red" name="-" onClick={() => {
          this.setState({
            count: this.state.count - 1
          })
        }} />
      </div>
    )
  }
}


export default App;
