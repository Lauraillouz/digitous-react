import React from "react";
import Box from "./Components/Box"; 

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/global.css"
import "./App.css";

const tempsMin = -20;
const tempsMax = 40;
const heartMin = 80;
const heartMax = 180;
const stepsMin = 0;
const stepsMax = 50000;


class App extends React.Component {

  constructor() {
    super();
    this.state = {
      water: 1.5,
      heart: 120,
      temperature: -10,
      steps: 3000
    }
  }

  onHeartChange = (e) => {
    this.setState({
      ...this.state,
      heart: e.target.value
    })
  }

  onStepsChange = (e) => {
    this.setState({
      ...this.state,
      steps: e.target.value
    })
  }

  onTemperatureChange = (e) => {
    this.setState({
      ...this.state,
      temperature: e.target.value
    })
  }

  calculateWater = () => {
    let drink = this.state.water;
    if (this.state.temperature > 20) {
      this.setState({
        ...this.state,
        water: drink + 0.002
      })  
    } else if (this.state.heart > 120) {
        this.setState({
          ...this.state,
          water: drink + 0.0008
        })
      } else if (this.state.steps > 10000) {
          this.setState({
            ...this.state,
            water: drink + 0.00002
          })
        }
  }

  render () {
    return (
      <div className="container-fluid">
        <div className="row">
          {/* WATER */}
          <Box icon="local_drink" color="#3A85FF" value={this.state.water} unit="L" /> 
          {/* STEPS */}
          <Box icon="directions_walk" color="black" min={stepsMin} max={stepsMax} value={this.state.steps} onChange={this.onStepsChange} unit="steps" />
          {/* HEART */}
          <Box icon="favorite" color="red" min={heartMin} max={heartMax} value={this.state.heart} onChange={this.onHeartChange} unit="bpm" />
          {/* TEMPERATURE */}
          <Box icon="wb_sunny" color="yellow" min={tempsMin} max={tempsMax} value={this.state.temperature} onChange={this.onTemperatureChange} unit="°C" />
        </div>
      </div>
    );
  }
}

export default App;