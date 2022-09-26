import "./App.css";

import React, { Component } from "react";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
      isUserLogin: Boolean,
      wrongCredentials: true,
      clickedOnHandleClick: false,
      displayLoginPage: true,
    };
  }
  handleClick = (e) => {
    this.setState({ displayLoginPage: false });
    this.setState({ clickedOnHandleClick: true });
    e.preventDefault();
    console.log(this.state);
    if (!this.state.userName || !this.state.password) {
      console.log(this.state.wrongCredentials);
      alert("Please enter all the fields");
      this.setState({ wrongCredentials: false });
      this.setState({ isUserLogin: false });
    } else {
      if (this.state.password.length < 8) {
        this.setState({ isUserLogin: false });
        this.setState({ wrongCredentials: false });
        // alert("password should be more than 8 letters");
       
      } else {
        this.setState({ isUserLogin: true });
      }
    }
  };
  render() {
    console.log(this.state.wrongCredentials);
  
    return (
      <div>
        {this.state.displayLoginPage ? (
          <>
            <div>
              <h1>UserName:</h1>
              <input
                onChange={(e) => {
                  this.setState({ userName: e.target.value });
                }}
                className="user_input"
                type="text"
              />
            </div>
            <div>
              <h1>Password:</h1>
              <input
                onChange={(e) => {
                  this.setState({ password: e.target.value });
                }}
                className={
                  this.state.wrongCredentials ? "correct_class" : "wrong_class"
                }
                type="text"
              />
            </div>
            <button onClick={this.handleClick}>Login</button>
          </>
        ) : this.state.isUserLogin ? (
          "loginSuccessful"
        ) : (
          <>
          <div>
            <h1>UserName:</h1>
            <input
              onChange={(e) => {
                this.setState({ userName: e.target.value });
              }}
              className="user_input"
              type="text"
            />
          </div>
          <div>
            <h1>Password:</h1>
            <input
              onChange={(e) => {
                this.setState({ password: e.target.value });
              }}
              className={
                this.state.wrongCredentials ? "correct_class" : "wrong_class"
              }
              type="text"
            />

            <p>Password should be above 8 characters</p>
          </div>
          <button onClick={this.handleClick}>Login</button>
        </>
         
        )}
      </div>
    );
  }
}
