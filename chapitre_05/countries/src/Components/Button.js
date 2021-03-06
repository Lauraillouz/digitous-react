import React from "react";

class Button extends React.Component {

    render() {
        return (
            <button className="btn btn-primary mb-3 mt-3" children={this.props.children} onClick={this.props.onClick} >

            </button>
        )
    }
}

export default Button;