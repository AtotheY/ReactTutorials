const employees = [
  {
    id: "1",
    name: "Bob",
    role: "Software Engineer"
  },
  {
    id: "2",
    name: "Stephanie",
    role: "CEO"
  },
  {
    id: "3",
    name: "Steve",
    role: "CTO"
  }
];

export const getAllEmployees = () => {
  return employees;
};

export const getEmployeeById = id => {
  return employees.filter(employee => {
    return employee.id === id;
  });
};
