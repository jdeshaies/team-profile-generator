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
        return console.log(this.team);
        // return this.addEmployee();
      })
      // .then(() => {
      //   writeFile(
      //     join(__dirname, "..", "output", "team.html"),
      //     createDocument(this.team)
      //   );
      //   return console.log("Created team.html");
      // });
  }

  // confirmNewEmployee(role) {
  //   if (role === "Finsih Building Team") {
  //     return;
  //   } else {
  //     return ;
  //   }
  // }

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
          return console.log("Team is complete.");
        }
        else if (role === "Engineer") {
          return console.log('Engineer will be added.')
        }
        else if (role === "Intern") {
          return console.log("Intern will be added.")
        }

      })
      // .then(({ role, name, id, email, confirmAddEmployee }) => {
      //   this.team.push({ role, name, id, email });
      //   if (confirmAddEmployee) {
      //     return this.addEmployee();
      //   }
      // });
  }
}

module.exports = CLI;

// {
//   type: "list",
//   message: "Add another employee?:",
//   name: "role",
//   choices: ["Engineer", "Intern", "Finish Building Team"],
// },

// addEmployee() {
//   return inquirer
//     .prompt([
//       {
//         type: "list",
//         message: "Add another employee?:",
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
//     .then(({ role, name, id, email, confirmAddEmployee }) => {
//       this.team.push({ role, name, id, email });
//       if (confirmAddEmployee) {
//         return this.addEmployee();
//       }
//     });
// }
// }