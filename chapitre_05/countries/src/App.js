import React from "react";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css"

//Components
import Button from "./Components/Button";
import Card from "./Components/Card";

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      name: "",
      capital: "",
      flag: "",
      population: "",
      region: ""
    }
  }

  componentDidMount() {
    fetch("http://localhost:8000/france")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        this.setState({
          name: data.data[0].name,
          capital: data.data[0].capital,
          flag: data.data[0].flag,
          population: data.data[0].population,
          region: data.data[0].region
        })
      })
  }


  getCountry = (country) => {
    fetch(`https://restcountries.eu/rest/v2/name/${country}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        this.setState({
          name: data[0].name,
          capital: data[0].capital,
          flag: data[0].flag,
          population: data[0].population,
          region: data[0].region
        })
      })
  }


  render() {
    return (
      <div>
        <div className="container d-flex justify-content-between">
          <Button onClick={() => this.getCountry("france")}>France</Button>
          <Button onClick={() => this.getCountry("brazil")}>Brazil</Button>
          <Button onClick={() => this.getCountry("croatia")}>Croatia</Button>
        </div>

        <Card name={this.state.name} capital={this.state.capital} region={this.state.region} population={this.state.population} flag={this.state.flag} />
      
      </div>

    )
  }
}

export default App;