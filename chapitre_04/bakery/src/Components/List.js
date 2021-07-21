import React from "react";

class List extends React.Component {

    constructor() {
        super();
    }

  render() {

    return (
      <div>
          <ul>
            {this.props.items.map((item) => {
                return <li>{item.name} : {item.price}</li> 
            })}  
          </ul>
          
      </div>
    )

  }
}

export default List;