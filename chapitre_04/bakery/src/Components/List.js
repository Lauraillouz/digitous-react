import React from "react";
import { v4 as uuid } from "uuid";

class List extends React.Component {
  render() {
    if (this.props.items.length === 0) {
      return <h2>No items available</h2>;
    } else {
      return (
        <div>
          <ul className="mt-3 list-group">
            {this.props.items
              .sort((a, b) => b.price - a.price)
              .map((item) => {
                return (
                  <div key={uuid()}>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      {item.name}{" "}
                      <span className="badge bg-primary badge-pill">
                        {item.price}€{" "}
                      </span>
                    </li>
                  </div>
                );
              })}
          </ul>
        </div>
      );
    }
  }
}

export default List;
