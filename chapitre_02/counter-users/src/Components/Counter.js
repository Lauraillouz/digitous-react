import React from "react";
// Component
import Button from "./Button";

class Counter extends React.Component {

    
    render() {
        return (
            <div>
                <h2>{this.props.count}</h2>
                <Button background="green" name="+" onClick={this.props.addFunction} />
                <Button background="red" name="-" onClick={this.props.substractFunction} />
                
            </div>
        )
    }
}

export default Counter;