import React from "react";

//Components
import Button from "./Components/Button";

const style = {
  maxWidth: 200
}

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
    fetch("https://restcountries.eu/rest/v2/name/france")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          name: data[0].name,
          capital: data[0].capital,
          flag: data[0].flag,
          population: data[0].population,
          region: data[0].region
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
        <Button onClick={() => this.getCountry("france")}>France</Button>
        <Button onClick={() => this.getCountry("brazil")}>Brazil</Button>
        <Button onClick={() => this.getCountry("croatia")}>Croatia</Button>

        <div>
          <img style={style} src={this.state.flag} alt={`drapeau de ${this.state.country}`}/>
          <p>Country: {this.state.name}</p>
          <p>Capital: {this.state.capital}</p>
          <p>Region: {this.state.region}</p>
          <p>Population: {this.state.population}</p>
        </div>
      
      </div>

    )
  }
}

export default App;