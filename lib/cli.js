const Employee = require("./employee");
const Manager = require("./manager.js");
const Engineer = require("./engineer");
const Intern = require("./intern");
const inquirer = require("inquirer");
const { join } = require("path");
const { writeFile } = require("fs/promises");
const { createDocument } = require("./document");
const { runInContext } = require("vm");

class CLI {
  constructor() {
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
      .then(({ name, id, email, office}) => {
        const manager = new Manager(name, id, email, office)
        // this.team.push({ name, id, email, office });
        this.team.push(manager);
        // return console.log(this.team);
        return this.addEmployee();
      })
      // .then(() => {
      //   writeFile(
      //     join(__dirname, "..", "output", "team.html"),
      //     createDocument(this.team)
      //   );
      //   return console.log("Created team.html");
      // });
  }

  addEmployee() {
    return inquirer
      .prompt([
        {
          type: "list",
          message: "Add another employee?:",
          name: "role",
          choices: ["Engineer", "Intern", "Finish Building Team"],
        },
      ])
      .then(({ role }) => {
        if (role === "Finish Building Team") {
          return console.log(this.team);
        }
        else if (role === "Engineer") {
          return this.addEngineer()
        }
        else if (role === "Intern") {
          return this.addIntern()
        }

      })
  }

  addEngineer() {
    return inquirer
      .prompt([
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
          message: "Email:",
          name: "email",
        },
        {
          type: "input",
          message: "GitHub Username:",
          name: "github",
        },
      ])
      .then(({ name, id, email, github}) => {
        const engineer = new Engineer(name, id, email, github)
        this.team.push(engineer);
        return this.addEmployee();
      })      
  }

  addIntern() {
    return inquirer
      .prompt([
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
          message: "Email:",
          name: "email",
        },
        {
          type: "input",
          message: "Enter School:",
          name: "school",
        },
      ])
      .then(({ name, id, email, school}) => {
        const intern = new Intern(name, id, email, school)
        this.team.push(intern);
        return this.addEmployee();
      })      
  }
}

module.exports = CLI;