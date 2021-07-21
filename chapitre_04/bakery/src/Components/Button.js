import React from "react";

class Button extends React.Component {

  render() {
    return (
      <button className={this.props.isSelected ? "btn btn-primary me-3" : "btn me-3" } onClick={this.props.onClick} children={this.props.children}>

      </button>
    )

  }
}

export default Button;