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
        return <Add />;
      case "list":
        return <List />;
      case "pay":
        return <Pay />;
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


  render() {
    return (
      <div>
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