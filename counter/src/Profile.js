import React, { Component } from "react";

class Profile extends Component {
  handleSetEmployeeOfTheMonth = () => {
    this.props.setEmployeeOfTheMonth(this.props.id);
  };
  render() {
    return (
      <div>
        <img
          src="https://sophosnews.files.wordpress.com/2013/08/facebook-silhouette_thumb.jpg?w=250"
          alt="pic"
        />
        <h1>{this.props.name}</h1>
        <p>{this.props.position}</p>
        <button onClick={this.handleSetEmployeeOfTheMonth}>
          Set {this.props.name} as employee of the month
        </button>
      </div>
    );
  }
}

export default Profile;
