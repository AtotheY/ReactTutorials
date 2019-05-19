import React, { Component } from "react";
import Counter from "./Counter";
import Profile from "./Profile";
import "./App.css";

/*
Employee 1 - Bob - Software Engineer
Employee 2 - Stephanie - CEO
*/

const employeeDirectory = [
  {
    name: "Bob",
    position: "Software Engineer",
    id: "1"
  },
  {
    name: "Stephanie",
    position: "CEO",
    id: "2"
  },
  {
    name: "Jim",
    position: "CTO",
    id: "3"
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: employeeDirectory,
      employeeOfTheMonth: "0"
    };
  }

  setEmployeeOfTheMonth = employeeId => {
    this.setState({
      employeeOfTheMonth: employeeId
    });
  };

  render() {
    return (
      <div className="App">
        <h1> This is the blank slate we're working with </h1>
        <Counter />
        {this.state.employees.map(employee => {
          return (
            <div
              style={{
                backgroundColor:
                  employee.id === this.state.employeeOfTheMonth
                    ? "yellow"
                    : "white"
              }}
            >
              <Profile
                key={employee.id}
                id={employee.id}
                name={employee.name}
                position={employee.position}
                setEmployeeOfTheMonth={this.setEmployeeOfTheMonth}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
