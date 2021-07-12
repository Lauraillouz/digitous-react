import React from "react";
import Box from "./components/Box"; 

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
  render () {
    return (
      <div className="container-fluid">
        <div className="row">
          <p>Heart : {heartMin}</p>
          <p>Temperature : {tempsMin}</p>
          <p>Steps : {stepsMin}</p>
          
          <Box icon="local_drink" color="#3A85FF" value={1.5} unit="L" /> 
          
          <Box icon="directions_walk" color="black" value={3000} unit="steps" />
          
          <Box icon="favorite" color="red" value={120} unit="bpm" />
          
          <Box icon="wb_sunny" color="yellow" value={-10} unit="°C" />
        </div>
      </div>
    );
  }
}

export default App;