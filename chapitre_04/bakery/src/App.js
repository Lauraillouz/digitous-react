import React from "react";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css"

//Components
import Add from "./Components/Add";
import List from "./Components/List";
import Pay from "./Components/Pay";
import Button from "./Components/Button";


class App extends React.Component {

  constructor () {
    super();

    this.state = {
      activeTab: "add",
      items: []
    }
  }

  renderTab = () => {
    switch(this.state.activeTab) {
      case "add":
        return <Add addItem={this.addItem} />;
      case "list":
        return <List items={this.state.items} />;
      case "pay":
        return <Pay  />;
    }
  }

  selectAdd = () => {
    this.setState((prevState) => ({
      ...prevState,
      activeTab: "add"
    }))
  }

  selectList = () => {
    this.setState((prevState) => ({
      ...prevState,
      activeTab: "list"
    }))
  }

  selectPay = () => {
    this.setState((prevState) => ({
      ...prevState,
      activeTab: "pay"
    }))
  }

  addItem = (name, price)  => {
    this.setState((prevState) => ({
      ...prevState,
      items: [
        ...prevState.items,
        {
          name: name,
          price: price
      }],
    }))

  }


  render() {
    console.log(this.state.items);
    return (
      <div className="container p-5">
        <div>
          <Button isSelected={this.state.activeTab === "add"} onClick={this.selectAdd} children="Add" />

          <Button isSelected={this.state.activeTab === "list"} onClick={this.selectList} children="List" />

          <Button isSelected={this.state.activeTab === "pay"} onClick={this.selectPay} children="Pay" />

        </div>

        {this.renderTab()}

      </div>
      
    )

  }
}

export default App;