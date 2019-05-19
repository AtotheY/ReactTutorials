import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Header extends Component {
  handleClickHome = () => {
    this.props.history.push("/");
  };

  handleClickEmployeeDirectory = () => {
    this.props.history.push("/directory");
  };

  render() {
    return (
      <div>
        <h2>This is the header</h2>
        <button onClick={this.handleClickHome}>Home Page</button>
        <button onClick={this.handleClickEmployeeDirectory}>
          Employee Directory
        </button>
      </div>
    );
  }
}

export default withRouter(Header);
