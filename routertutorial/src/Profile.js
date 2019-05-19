import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { getEmployeeById } from "./EmployeeAPI";

class Profile extends Component {
  constructor(props) {
    super(props);
    const employee = getEmployeeById(this.props.match.params.id);
    let employeeId = "not found";
    let employeeName = "not found";
    let employeeRole = "not found";
    if (employee.length > 0) {
      employeeId = employee[0].id;
      employeeName = employee[0].name;
      employeeRole = employee[0].role;
    }

    this.state = {
      id: employeeId,
      name: employeeName,
      role: employeeRole
    };
  }

  render() {
    return (
      <div>
        <h4>This is our profile</h4>
        <h5>Name: {this.state.name}</h5>
        <h5>role: {this.state.role}</h5>
        <h5>id: {this.state.id}</h5>
      </div>
    );
  }
}

export default withRouter(Profile);
