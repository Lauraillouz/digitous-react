import React from "react";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

//Components
import Add from "./Components/Add";
import List from "./Components/List";
import Pay from "./Components/Pay";
import Button from "./Components/Button";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      activeTab: "add",
      items: [],
      subTotal: 0,
    };
  }

  renderTab = () => {
    switch (this.state.activeTab) {
      case "add":
        return <Add addItem={this.addItem} />;
      case "list":
        return <List items={this.state.items} />;
      case "pay":
        return <Pay items={this.state.items} subTotal={this.state.subTotal} />;
      default:
        return <p>404 Not Found</p>;
    }
  };

  selectAdd = () => {
    this.setState((prevState) => ({
      ...prevState,
      activeTab: "add",
    }));
  };

  selectList = () => {
    this.setState((prevState) => ({
      ...prevState,
      activeTab: "list",
    }));
  };

  selectPay = () => {
    this.setState((prevState) => ({
      ...prevState,
      activeTab: "pay",
    }));
  };

  addItem = (name, price) => {
    let newSubTotal = parseInt(price) + this.state.subTotal;
    this.setState((prevState) => ({
      ...prevState,
      items: [
        ...prevState.items,
        {
          name: name,
          price: price,
        },
      ],
      subTotal: newSubTotal,
    }));
  };

  render() {
    return (
      <div className="container p-5">
        <div>
          <Button
            isSelected={this.state.activeTab === "add"}
            onClick={this.selectAdd}
          >
            Add
          </Button>

          <Button
            isSelected={this.state.activeTab === "list"}
            onClick={this.selectList}
          >
            List
          </Button>

          <Button
            isSelected={this.state.activeTab === "pay"}
            onClick={this.selectPay}
          >
            Pay
          </Button>
        </div>

        {this.renderTab()}
      </div>
    );
  }
}

export default App;
