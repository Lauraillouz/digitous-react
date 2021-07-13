import React from "react";
// Component
import Button from "./Button";

class Counter extends React.Component {
    constructor() {
        super();
        this.state = {
          count: 0,
        }
    }
    
    render() {
        return (
            <div>
                <h2>{this.state.count}</h2>
                <Button background="green" name="+" onClick={() => {
                    let addFunction = {
                        count: this.state.count + 1
                    }
                    this.setState(addFunction)
                }} />
                <Button background="red" name="-" onClick={() => {
                    let substractFunction = {
                        count: this.state.count - 1
                    }
                    if (this.state.count <= 0) {
                        alert ("Vous ne pouvez pas descendre en dessous de zéro !");
                    } else this.setState(substractFunction)
                }} />
            </div>
        )
    }
}

export default Counter;