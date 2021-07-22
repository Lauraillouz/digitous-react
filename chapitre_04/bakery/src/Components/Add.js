import React from "react";

class Add extends React.Component {

    constructor() {
        super();
        this.state = {
            productName: "",
            price: 1,
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
            price: e.target.value,
        }));
    }

    render() {
        return (
        <div>
            <input className="form-control mt-3 mb-3" type="text" onChange={this.updateProductName}/>
            <input htmlFor="texLabel" type="range" min={1} max={10} value={this.state.price}onChange={this.updatePrice} />
            <label className="ms-3" id="texLabel" type="text">{this.state.price} €</label>
            <button className="btn btn-dark ms-3"onClick={() => this.props.addItem(this.state.productName, this.state.price)} >Add</button>

        </div>
        )

    }
}

export default Add;