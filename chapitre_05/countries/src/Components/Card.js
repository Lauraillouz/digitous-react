import React from "react";

//CSS
const style = {
  maxWidth: 200,
};

class Card extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="card">
          <div className="card-body">
            <div className="me-3 d-flex align-items-center flex-column">
              <img
                className="mb-3"
                style={style}
                src={this.props.countryInfo.flag}
                alt={`drapeau de ${this.props.countryInfo.name}`}
              />
              <p>Country: {this.props.countryInfo.name}</p>
              <p>Capital: {this.props.countryInfo.capital}</p>
              <p>Region: {this.props.countryInfo.region}</p>
              <p>Population: {this.props.countryInfo.population}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
