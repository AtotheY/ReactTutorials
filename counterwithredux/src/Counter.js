import React, { Component } from "react";
import { increment, decrement } from "./Actions";
import { connect } from "react-redux";

class Counter extends Component {
  increment = () => {
    this.props.increment();
  };

  decrement = () => {
    this.props.decrement();
  };

  render() {
    return (
      <div>
        <p> This is our current count: {this.props.currentCount}</p>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentCount: state.count
});

const mapDispatchToProps = {
  increment,
  decrement
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
