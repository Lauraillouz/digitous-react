import React from "react";
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

const patternEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const patternPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;


class App extends React.Component {

  constructor () {
    super();
    this.state = {
      email: "",
      password: "",
      passwordClass: "form-control is-invalid",
      emailClass: "form-control is-invalid",
      isSubmitted: false
    }
  }


  onInputEmail = (e) => {

    this.setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
      emailClass: patternEmail.test(e.target.value) ? "form-control is-valid" : "form-control is-invalid",
    }));

  }


  onInputPassword = (e) => {

    this.setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
      passwordClass: patternPassword.test(e.target.value) ? "form-control is-valid" : "form-control is-invalid"
    }));

  }


  handleSubmit = (e) => {

    e.preventDefault();
    this.setState((prevState) => ({
      ...prevState,
      isSubmitted: true
    }))
  }
  

  render () {
 

    return (

      this.state.isSubmitted === true ?
      <div className="bg-light container col-sm-6 col-9">
        <p className="p-5 font-bolder fs-1 text-center">Form submitted</p>
      </div> :

      <div className="container col-sm-6 col-9">

        <form className="form-control" onSubmit={(e) => this.handleSubmit(e)}>
          <h1 className="text-center">Login</h1>

          <div className="p-3">
            <label htmlFor="validationTextarea" className="form-label" label="Email address">Email address</label>
            <input className={this.state.emailClass} type="email" placeholder="Enter email..." id="validationTextarea" onInput={this.onInputEmail} name="email" required/>
          </div>

          <div className="p-3">
            <label htmlFor="validationTextarea" className="form-label" label="Password">Password</label>
            <input className={this.state.passwordClass} type="password" placeholder="Enter password..." id="validationTextarea" onInput={this.onInputPassword} name="password" required/>
          </div>

          <div className="p-3">
            <input type="checkbox"></input>
            <label className="ps-3">Remember me</label>
          </div>

          <div className="p-3">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
          
        </form>

      </div>
    )
      
  }
}

export default App;