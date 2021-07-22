import React from "react";

class Card extends React.Component {

    constructor() {
        super();
        this.state = {
            image: "../../public/images/item.png"
        }
    }

    componentDidMount() {
        fetch(`https://raw.githubusercontent.com/konexio/digitous-assest/main/bakery/${this.props.productName}.png`)
            .then((res) => res.blob())
            .then((productImage) => {
                let product = URL.createObjectURL(productImage)
                this.setState({
                    image: product
                }
            )
        })
    }


    render() {
        return (
        <div>

            <button onclick={() => this.props.onClick(this.props.productName, this.props.price)}><img src={this.state.image}></img></button>
        </div>
        )

    }
}

export default Card;