import React from "react";

//Components
import UserInfo from "./Components/UserInfo";
import Counter from "./Components/Counter";

//CSS
import './App.css';

//JSON
import users from "./users.json";

class App extends React.Component {

  constructor() {
    super();
    this.state = {
        count: 10
    }

  }

  addFunction = () => {
    let addFunction = {
      count: this.state.count + 1
    }
    if (this.state.count >= 10) {
      alert ("Vous avez affiché tous les utilisateurs !")
    } else {
      this.setState(addFunction)
    }
  }

  substractFunction = () => {
    let substractFunction = {
        count: this.state.count - 1
    }
    if (this.state.count <= 1) {
        alert ("Vous ne pouvez pas descendre en dessous de un !");
    } else {
      this.setState(substractFunction)
    }
  }


  render() {
    return (
      <div>
        <Counter count={this.state.count} substractFunction={this.substractFunction} addFunction={this.addFunction} />
        <div>
          {users.map((user, index) => {
            if (index < this.state.count) {
              return <UserInfo key={user.id}name={user.name} email={user.email} website={user.website} />
            } else {
              return null;
            }
          })}
        </div>
  

      </div>
    )
  }
}


export default App;
