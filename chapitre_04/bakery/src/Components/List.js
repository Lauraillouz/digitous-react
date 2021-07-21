import React from "react";

class List extends React.Component {

    constructor() {
        super();
    }

  render() {

    return (
      <div>
          <ul className="mt-3 list-group">
            {this.props.items.map((item) => {
                return <li className="list-group-item d-flex justify-content-between align-items-center">{item.name} <span className="badge bg-primary badge-pill">{item.price}€ </span></li> 
            }).sort().reverse()}  
          </ul>
          
      </div>
    )

  }
}

export default List;