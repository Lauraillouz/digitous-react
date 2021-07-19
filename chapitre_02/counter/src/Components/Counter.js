import React from "react";

class Counter extends React.Component {
    
    render() {
        return (
            <div>
                <h2>{this.props.count}</h2>
                <button className="green" onClick={this.props.addFunction}>+</button>
                <button className="red" onClick={this.props.substractFunction}>-</button>
                
            </div>
        )
    }
}

export default Counter;