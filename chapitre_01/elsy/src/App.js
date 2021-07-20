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
      steps: 1000
    }
  }

  onHeartChange = (e) => {
    this.setState((prevState) => this.calculateWater({
      ...prevState,
      heart: e.target.value
    }));
  }


  onStepsChange = (e) => {
    this.setState((prevState) => this.calculateWater({
      ...prevState,
      steps: e.target.value
    }));
  }


  onTemperatureChange = (e) => {
    this.setState((prevState) => this.calculateWater({
      ...prevState,
      temperature: e.target.value
    }));
  }


  calculateWater = (state) => {
    const temperatureIncrement = 0.02 * Math.max(state.temperature - 20, 0);
    const heartIncrement = 0.0008 * Math.max(state.heart - 120, 0);
    const stepsIncrement = 0.00002 * Math.max(state.steps - 10000, 0);
    return {
      ...state,
      water: 1.5 + temperatureIncrement + heartIncrement + stepsIncrement
    }
  }


  render () {
    return (
      <div className="container-fluid">
        <div className="row">

          {/* WATER */}
          <Box icon="local_drink" color="#3A85FF" value={this.state.water} unit="L" /> 

          {/* STEPS */}
          <Box className="steps" icon="directions_walk" color="black" min={stepsMin} max={stepsMax} value={this.state.steps} onChange={this.onStepsChange} unit="steps" />

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