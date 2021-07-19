import React from "react";
// Components
import Counter from "./Components/Counter";
// CSS
import "./css/App.css";

class App extends React.Component {

  constructor() {
    super();
    this.state = {
        countOne: 0,
        countTwo: 1
    }
  }

  addFunctionOne = () => {
    let addCountOne = {
      countOne: this.state.countOne + 1
    }
    let addCountTwo = {
      countTwo: this.state.countTwo + 1
    }
    if (this.state.countOne >= 100) {
      alert ("Vous ête arrivé au max !")
    } else if (this.state.countOne === this.state.countTwo) {
      this.setState(addCountOne)
      this.setState(addCountTwo)
    } else if (this.state.countOne < this.state.countTwo) {
      this.setState(addCountOne)
    }
  }

  addFunctionTwo = () => {
    let addCountTwo = {
      countTwo: this.state.countTwo + 1
    }
    if (this.state.countTwo >= 100) {
      alert ("Vous ête arrivé au max !")
    } else if (this.state.countTwo >= this.state.countOne) {
      this.setState(addCountTwo)
    }
  }

  substractFunctionOne = () => {
    let substractCountOne = {
      countOne: this.state.countOne - 1
    }
    let substractCountTwo = {
      countTwo: this.state.countTwo - 1
    }
    if (this.state.countOne <= 0) {
      alert ("Vous ne pouvez pas descendre en dessous de zéro !");
    } else if (this.state.countOne === this.state.countTwo) {
      this.setState(substractCountOne)
    } else if (this.state.countTwo <= this.state.countOne) {
      this.setState(substractCountOne)
      this.setState(substractCountTwo)
    } else {
      this.setState(substractCountOne)
    }
  }

  substractFunctionTwo = () => {
    let substractCountOne = {
      countOne: this.state.countOne - 1
    }
    let substractCountTwo = {
      countTwo: this.state.countTwo - 1
    }
    if (this.state.countTwo <= 0) {
      alert ("Vous ne pouvez pas descendre en dessous de zéro !");
    } else if (this.state.countTwo === this.state.countOne) {
      this.setState(substractCountOne)
      this.setState(substractCountTwo)
    } else if (this.state.countTwo > this.state.countOne) {
      this.setState(substractCountTwo)
    }
  }

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <Counter name="counterOne" count={this.state.countOne} addFunction={this.addFunctionOne} substractFunction={this.substractFunctionOne} />
        <Counter name="counterTwo" count={this.state.countTwo} addFunction={this.addFunctionTwo} substractFunction={this.substractFunctionTwo} />
      </div>
    )
  }
}


export default App;
