import React from "react";

// Components
import List from "./List";

class PastOrders extends React.Component {
  render() {
    return (
      <div>
        {this.props.payState.map((list) => (
          <div>
            <List items={list.basket} />

            <div>
              <ul className="mt-3 list-group list-group-flush">
                <li className="list-group-item">Sous-Total: {list.total}€</li>
                <li className="list-group-item">Total TVA: {list.totalTVA}</li>
                <li className="list-group-item">Eco tax: {list.totalEcoTax}</li>
                <li className="list-group-item">Total TTC: {list.totalTTC}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default PastOrders;
