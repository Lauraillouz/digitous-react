import React from "react";

class Add extends React.Component {

    constructor() {
        super();
        this.state = {
            productName: "",
            price: 1
        }
    }

    updateProductName = (e) => {
        this.setState((prevState) => ({
            ...prevState,
            productName: e.target.value
        }));
    }

    updatePrice = (e) => {
        this.setState((prevState) => ({
            ...prevState,
            price: e.target.value
        }));
    }


    render() {
        return (
        <div>
            <input type="text" onChange={this.updateProductName}/>
            <input type="range" min={1} max={10} onChange={this.updatePrice} />
            <button onClick="">Add</button>
            
        </div>
        )

    }
}

export default Add;