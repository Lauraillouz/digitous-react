import React from "react";

//CSS
const style = {
    maxWidth: 200
  }


class Card extends React.Component {

    render() {
        return (
        <div className="container">
            <div className="card">
                <div className="card-body d-flex justify-content-center">
                    <div className="me-3">
                        <img style={style} src={this.props.flag} alt={`drapeau de ${this.props.name}`}/>
                    </div>
                    <div>
                        <p>Country: {this.props.name}</p>
                        <p>Capital: {this.props.capital}</p>
                        <p>Region: {this.props.region}</p>
                        <p>Population: {this.props.population}</p>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Card;