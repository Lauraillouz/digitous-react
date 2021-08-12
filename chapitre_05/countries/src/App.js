import React from "react";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

//Components
import Button from "./Components/Button";
import Card from "./Components/Card";

const URL = "https://restcountries.eu/rest/v2/name/";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "",
      capital: "",
      flag: "",
      population: "",
      region: "",
    };
  }

  componentDidMount() {
    this.getCountry("brazil");
  }

  getCountry = (country) => {
    fetch(`${URL}${country}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          name: data[0].name,
          capital: data[0].capital,
          flag: data[0].flag,
          population: data[0].population,
          region: data[0].region,
        });
      });
  };

  render() {
    return (
      <div>
        <div className="container d-flex justify-content-between">
          <Button onClick={() => this.getCountry("france")}>France</Button>
          <Button onClick={() => this.getCountry("brazil")}>Brazil</Button>
          <Button onClick={() => this.getCountry("croatia")}>Croatia</Button>
        </div>

        <Card countryInfo={{ ...this.state }} />
      </div>
    );
  }
}

export default App;
