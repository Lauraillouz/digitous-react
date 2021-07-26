import React from "react";

class Card extends React.Component {
  constructor() {
    super();
    this.state = {
      image: "../../public/images/item.png",
    };
  }

  componentDidMount() {
    fetch(
      `https://raw.githubusercontent.com/konexio/digitous-assest/main/bakery/${this.props.productName}.png`
    )
      .then((res) => res.blob())
      .then((productImage) => {
        let product = URL.createObjectURL(productImage);
        console.log(product);
        this.setState({
          image: product,
        });
      });
  }

  render() {
    return (
      <div>
        <button
          onClick={() =>
            this.props.onClick(this.props.productName, this.props.price)
          }
        >
          <img
            style={{ maxWidth: 200 }}
            src={this.state.image}
            alt={`${this.props.productName}`}
          ></img>
        </button>
      </div>
    );
  }
}

export default Card;
