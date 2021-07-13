import React from "react";
// Components
import UserInfo from "./Components/UserInfo";
 // CSS
import "./App.css";
// JSON
import users from "./users.json";

class App extends React.Component {

  render() {
    return (
      <div>
        {users.map((user) => (
          <UserInfo name={user.name} email={user.email} website={user.website} />))}
      </div>
    )
  }
}

export default App;