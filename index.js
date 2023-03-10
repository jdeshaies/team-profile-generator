const fs = require("fs");
const inquirer = require("inquirer");
const { off } = require("process");

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
