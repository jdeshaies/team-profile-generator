const inquirer = require("inquirer");
const { join } = require("path");
const { writeFile } = require("fs/promises");
const { createDocument } = require("./document");
const { runInContext } = require("vm");

class CLI {
  constructor() {
    this.title = "";
    this.team = [];
  }
  run() {
    return inquirer
    .prompt([
        {
            type: "input",
            message: "Team Manager's Name:",
            name: "name",
        }
    ])
    .then(({ name }) => {
        this.title = `${name}'s Team`;
        return this.addEmployee();
      })
  }
  addEmployee() {
      return inquirer
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
}

// inquirer
//   .prompt([
//     {
//       type: "input",
//       message: "Team Manager Name:",
//       name: "name",
//     },
//     {
//       type: "input",
//       message: "Team Manager Employee ID:",
//       name: "id",
//     },
//     {
//       type: "input",
//       message: "Team Manager Email:",
//       name: "email",
//     },
//     {
//       type: "input",
//       message: "Office Number",
//       name: "officeNumber",
//     },
//   ])
//   .then(
//     (response) => console.log(response),
//     (err) => (err ? console.error(err) : console.log("Success!"))
//   );

// // Create new manager, ask if new employee should be added?

// addEmployee() {
//   return inquirer
//     .prompt([
//       {
//         type: "list",
//         message: "Role:",
//         name: "role",
//         choices: ["Engineer", "Intern", "Finish Building Team"],
//       },
//       {
//         type: "input",
//         message: "Name:",
//         name: "name",
//       },
//       {
//         type: "input",
//         message: "ID:",
//         name: "id",
//       },
//       {
//         type: "input",
//         message: "email",
//         name: "email",
//       },
//     ])
//     .then(
//       (response) => console.log(response),
//       (err) => (err ? console.error(err) : console.log("Success!"))
//     );
// }
