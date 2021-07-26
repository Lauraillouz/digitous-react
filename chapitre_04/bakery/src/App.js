import React from "react";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

//Components
import Add from "./Components/Add";
import List from "./Components/List";
import Pay from "./Components/Pay";
import Button from "./Components/Button";
import PastOrders from "./Components/PastOrders";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      activeTab: "add",
      items: [],
      subTotal: 0,
      payState: [],
    };
  }

  renderTab = () => {
    switch (this.state.activeTab) {
      case "add":
        return <Add addItem={this.addItem} />;
      case "list":
        return <List items={this.state.items} deleteItem={this.deleteItem} />;
      case "pay":
        return (
          <Pay
            items={this.state.items}
            subTotal={this.state.subTotal}
            handleSave={this.handleSave}
          />
        );
      case "pastOrders":
        return <PastOrders payState={this.state.payState} />;
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
  selectPastOrders = () => {
    this.setState((prevState) => ({
      ...prevState,
      activeTab: "pastOrders",
    }));
  };

  addItem = (name, price) => {
    this.setState((prevState) => ({
      ...prevState,
      items: [
        ...prevState.items,
        {
          id: this.state.items.length,
          name: name,
          price: price,
        },
      ],
    }));
  };

  deleteItem = (id) => {
    let newItems = this.state.items.filter((item) => item.id !== id);

    this.setState((prevState) => ({
      ...prevState,
      items: newItems,
    }));
  };

  handleSave = (payState) => {
    this.setState((prevState) => ({
      ...prevState,
      payState: [...prevState.payState, payState],
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

          <Button
            isSelected={this.state.activeTab === "pastOrders"}
            onClick={this.selectPastOrders}
          >
            Past Orders
          </Button>
        </div>

        {this.renderTab()}
      </div>
    );
  }
}

export default App;
