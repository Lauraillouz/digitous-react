import React from "react";

// Components
import Card from "./Card";

import { v4 as uuid } from "uuid";

class Pay extends React.Component {
  constructor() {
    super();
    this.state = {
      basket: [],
      total: 0,
      totalTVA: 0,
      totalEcoTax: 0,
      totalTTC: 0,
    };
  }

  handleSelect = (name, price) => {
    console.log(name, price);
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
            <li className="list-group-item">
              Sous-Total: {this.props.subTotal}€
            </li>
            <li className="list-group-item">
              Total TVA: {this.state.totalTVA}
            </li>
            <li className="list-group-item">
              Eco tax: {this.state.totalEcoTax}
            </li>
            <li className="list-group-item">Total: {this.state.totalEcoTax}</li>
            <li className="list-group-item">
              Total TTC: {this.state.totalTTC}
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Pay;
