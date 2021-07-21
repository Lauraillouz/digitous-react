import React from "react";

class List extends React.Component {

    constructor() {
        super();
    }

  render() {

    return (
      <div>
          <ul className="mt-3 list-group list-group-flush">
            {this.props.items.map((item) => {
                return <li className="list-group-item">{item.name} : {item.price}</li> 
            })}  
          </ul>
          
      </div>
    )

  }
}

export default List;