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
      activeTab: "pay",
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


  render() {
    return (
      <div>
        <div>
          <Button isSelected={this.state.activeTab === "add"} onClick="" children="Add" />

          <Button isSelected={this.state.activeTab === "list"} onClick="" children="List" />

          <Button isSelected={this.state.activeTab === "pay"} onClick="" children="Pay" />

        </div>

        {this.renderTab()}

      </div>
      
    )

  }
}

export default App;