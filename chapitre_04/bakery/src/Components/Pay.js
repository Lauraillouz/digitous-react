import React from "react";

import Card from "./Card";

class Pay extends React.Component {

  constructor() {
    super();
  }

  render() {

    return (

      <div> 

        <div>
          <ul className="mt-3 list-group">
            {this.props.items.map((item) => {
                return <li className="list-group-item d-flex justify-content-between align-items-center">{item.name} <span className="badge bg-primary badge-pill">{item.price}€ </span></li> 
            })}  
          </ul>
        </div>

        <div>
          <ul className="mt-3 list-group list-group-flush">
            <li className="list-group-item">SubTotal: {this.props.subTotal}€</li>
            <li className="list-group-item">VAT: </li>
            <li className="list-group-item">Eco tax: </li>
            <li className="list-group-item">Total: </li>
          </ul>
        </div>

        <Card productName="croissant"/>
          
      </div>
    )
  }
  

}
  
  export default Pay;