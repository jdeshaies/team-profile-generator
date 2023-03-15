const Employee = require("./employee");
const Manager = require("./manager");

createDocument = (teamList) => {
  return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My Team</title>
        <link rel="stylesheet" href="../dist/style.css" />
      </head>
      <body>
        ${renderEmployeeCards(teamList)}
      </body>
    </html>
    `
};

renderEmployeeCards = (teamList) => {
  let employeeCards = [];
  // Will creat HTML card elements for each employee in the last of employees depending on their role
  for (let employee of teamList) {
    role = employee.getRole();
    // console.log(employee)
    if (role === "Manager") {
      const managerCard = generateManagerCard(employee);
      employeeCards.push(managerCard);
    }
    else if (role === "Engineer") {
      const engineerCard = generateEngineerCard(employee);
      employeeCards.push(engineerCard);
    }
    else if (role === "Intern") {
      const internCard = generateInternCard(employee);
      employeeCards.push(internCard);
    }
  }
  let joinedEmployeeCards = employeeCards.join("");
  return joinedEmployeeCards;
};

generateManagerCard = (manager) => {
  return `
  <div class="card">
        <div class="card-header">
            <h2>${manager.getName()}<h2>
            <h3>${manager.getRole()}</h3>
        </div>
        <div class="card-body">
            <p class="id">ID: ${manager.getId()}</p>
            <p class="email">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></p>
            <p class="office">Office Number: ${manager.getOfficeNumber()}</p>
        </div>
    </div>
    `
};

generateEngineerCard = (engineer) => {
  return `
  <div class="card">
        <div class="card-header">
            <h2>${engineer.getName()}<h2>
            <h3>${engineer.getRole()}</h3>
        </div>
        <div class="card-body">
            <p class="id">ID: ${engineer.getId()}</p>
            <p class="email">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></p>
            <p class="office">GitHub: ${engineer.getGithub()}</p>
        </div>
    </div>
    `
};

generateInternCard = (intern) => {
  return `
  <div class="card">
        <div class="card-header">
            <h2>${intern.getName()}<h2>
            <h3>${intern.getRole()}</h3>
        </div>
        <div class="card-body">
            <p class="id">ID: ${intern.getId()}</p>
            <p class="email">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></p>
            <p class="office">School: ${intern.getSchool()}</p>
        </div>
    </div>
    `
};

module.exports = { createDocument };
