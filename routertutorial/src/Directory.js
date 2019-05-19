import React, { Component } from "react";
import { getAllEmployees } from "./EmployeeAPI";

class Directory extends Component {
  handleClickEmployee = id => {
    console.log(id);
  };

  render() {
    const employeeList = getAllEmployees();
    return (
      <div>
        <h2>This is our employee Directory</h2>
        <div>
          {employeeList.map(employee => {
            return (
              <div onClick={this.handleClickEmployee.bind(this, employee.id)}>
                {employee.name}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Directory;
