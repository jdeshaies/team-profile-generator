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
        },
        {
          type: "input",
          message: "Team Manager's ID:",
          name: "id",
        },
        {
          type: "input",
          message: "Team Manager's Email Address:",
          name: "email",
        },
        {
          type: "input",
          message: "Team Manager's Office Number:",
          name: "office",
        },
      ])
      .then(({ name }) => {
        this.title = `${name}'s Team`;
        return this.addEmployee();
      })
      .then(() => {
        // sort by priority so that priority tasks come before non-priority tasks
        writeFile(
            join(__dirname, "..", "output", "team.html"),
            createDocument(this.title, this.team)
          );
        return console.log('Created team.html');
      });
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
        {
          type: "confirm",
          name: "confirmAddEmployee",
          message: "Would you like to add another employee?",
        },
      ])
      .then(({ role, name, id, email, confirmAddEmployee }) => {
        this.team.push({ role, name, id, email });
        if (confirmAddEmployee) {
          return this.addEmployee();
        }
      });
  }
}

module.exports = CLI;
