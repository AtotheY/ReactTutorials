import React, { Component } from "react";

const generateRandomString = length => {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < length; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
};

class Lifecycle extends Component {
  constructor() {
    super();
    this.state = {
      displayString: "We are in the constructor",
      counter: 0,
      didDisplayStringUpdate: false
    };
  }

  handleChangeDisplayString = () => {
    const newDisplayString = generateRandomString(8);
    this.setState({
      displayString: newDisplayString,
      didDisplayStringUpdate: true
    });
  };

  componentDidMount = () => {
    this.setState({
      displayString: "We are now in the component did mount",
      didDisplayStringUpdate: true
    });
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (this.state.didDisplayStringUpdate === true) {
      console.log("The component just updated!");
      this.setState({
        counter: this.state.counter + 1,
        didDisplayStringUpdate: false
      });
    }
  };

  componentWillUnmount = () => {
    console.log("The component is now being unmounted! Goodbye!");
  };

  render() {
    return (
      <div>
        <h2> This is our Lifecycle component </h2>
        <h3> Current state change counter: {this.state.counter}</h3>
        <h4>The current display string: {this.state.displayString}</h4>
        <button onClick={this.handleChangeDisplayString}>
          {" "}
          Generate a new display string!
        </button>
      </div>
    );
  }
}

export default Lifecycle;
