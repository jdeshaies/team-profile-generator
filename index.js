const fs = require("fs");
const inquirer = require("inquirer");

class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return 'Employee';
  }
}

inquirer
  .prompt([
    {
      type: "input",
      message: "Team Manager Name:",
      name: "name",
    },
    {
      type: "input",
      message: "Team Manager Employee ID:",
      name: "id",
    },
    {
      type: "input",
      message: "Team Manager Email:",
      name: "email",
    },
    {
      type: "input",
      message: "Office Number",
      name: "office",
    },
  ])
  .then(
    (response) => console.log(response), (err) => (err ? console.error(err) : console.log("Success!"))
  );