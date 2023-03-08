const fs = require("fs");
const inquirer = require("inquirer");

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