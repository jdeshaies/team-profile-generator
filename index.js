const fs = require("fs");
const inquirer = require("inquirer");
const { off } = require("process");

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
    return "Employee";
  }
}

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  getRole() {
    return "Manager";
  }
}

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
  getGithub() {
    return this.github;
  }
  getRole() {
    return "Engineer";
  }
}

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
  getSchool() {
    return this.school;
  }
  getRole() {
    return "Intern";
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
      name: "officeNumber",
    },
  ])
  .then(
    (response) => console.log(response),
    (err) => (err ? console.error(err) : console.log("Success!"))
  );

// Create new manager, ask if new employee should be added?

function addEmployee() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Role:",
        name: "role",
        choices: ["Engineer", "Intern", "Finish Building Team"],
      },
      {
        type: "input",
        message: "Name:",
        name: "name",
      },
      {
        type: "input",
        message: "ID:",
        name: "id",
      },
      {
        type: "input",
        message: "email",
        name: "email",
      },
    ])
    .then(
      (response) => console.log(response),
      (err) => (err ? console.error(err) : console.log("Success!"))
    );
}
