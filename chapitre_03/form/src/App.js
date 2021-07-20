import React from "react";
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// Components
import Input from "./Components/Input.js"

class App extends React.Component {


  render () {
    return (
      <div className="container col-sm-6 col-9">

        <form className="form-control">
          <h1 className="text-center">Login</h1>

          <div className="p-3">
            <Input className="d-block form-control" label="Email address" type="text" name="email" placeholder="Enter email..."/>
          </div>

          <div className="p-3">
            <Input className="d-block form-control" label="Password" type="text" name="password" placeholder="Enter password..."/>
          </div>

          <div className="p-3">
            <input type="radio"></input>
            <label className="ps-3">Remember me</label>
          </div>

          <div className="p-3">
            <button type="button" className="btn btn-primary">Submit</button>
          </div>
          
        </form>

      </div>
    )
      
  }
}

export default App;