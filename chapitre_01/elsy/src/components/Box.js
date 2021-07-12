import React from "react";

const style = {
    fontSize: "100",
    color: "black"
}


class Box extends React.Component {
    render() {
        return (
            <div className="box col-sm-3 col-6">
                <span className="material-icons" style={{ color: this.props.color}}>
                    {this.props.icon}
                </span>
                <p>{this.props.value}{this.props.unit}</p>
            </div>
        )
    }
}

export default Box;