import React, { Component } from "react";

export class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.count || 0,
    };
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  decrement = () => {
    this.setState((prev)=>({
    count:prev.count - 1,
    }));
  };

  render() {
    return (
      <>
        <div>{this.state.count}</div>
        <button onClick={this.state.count < 10 && this.increment}>
          Increment
        </button>
        <button onClick={this.state.count > 0 && this.decrement}>
          Decrement
        </button>
        <p>{this.state.count % 2 === 0 ? "EVEN" : "ODD"}</p>
      </>
    );
  }
}
