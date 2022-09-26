import React, { Component } from "react";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

export class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Main />
      </>
    );
  }
}
