import React from "react";

// Components
import Card from "./Card";

import { v4 as uuid } from "uuid";

const initialState = {
  basket: [],
  total: 0,
  totalTVA: 0,
  totalEcoTax: 0,
  totalTTC: 0,
};

class Pay extends React.Component {
  constructor() {
    super();
    this.state = initialState;
  }

  handleSelect = (name, price) => {
    // Calcul du total
    let newTotal = parseInt(price) + this.state.total;

    // Calcul EcoTax
    let newTotalEcoTax = (this.state.basket.length + 1) * 0.03;

    // Calcul TVA
    let newTotalTVA = (newTotal * 20) / 100;

    this.setState((prevState) => ({
      basket: [
        ...prevState.basket,
        {
          name: name,
          price: price,
        },
      ],
      total: newTotal,
      totalEcoTax: newTotalEcoTax,
      totalTVA: newTotalTVA,
      totalTTC: newTotal + newTotalEcoTax + newTotalTVA,
    }));
  };

  handleClear = () => {
    this.setState(() => ({
      ...initialState,
    }));
  };

  render() {
    return (
      <div>
        <div>
          <ul className="mt-3 d-flex list-unstyled">
            {this.props.items.map((item) => {
              return (
                <li className="list-group-item border-0" key={uuid()}>
                  <Card
                    onClick={() => {
                      this.handleSelect(item.name, item.price);
                    }}
                    productName={item.name}
                  />
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <ul className="mt-3 list-group list-group-flush">
            <li className="list-group-item">Sous-Total: {this.state.total}€</li>
            <li className="list-group-item">
              Total TVA: {this.state.totalTVA}
            </li>
            <li className="list-group-item">
              Eco tax: {this.state.totalEcoTax}
            </li>
            <li className="list-group-item">
              Total TTC: {this.state.totalTTC}
            </li>
          </ul>
        </div>

        <button className="btn btn-dark ms-3 mt-3" onClick={this.handleClear}>
          Clear
        </button>
        <button
          className="btn btn-success ms-3 mt-3"
          onClick={() => this.props.handleSave(this.state)}
        >
          Save
        </button>
      </div>
    );
  }
}

export default Pay;
