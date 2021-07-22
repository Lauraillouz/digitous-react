import React from "react";

class Button extends React.Component {

    render() {
        return (
            <button children={this.props.children} onClick={this.props.onClick} >

            </button>
        )
    }
}

export default Button;