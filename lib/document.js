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
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="../dist/style.css" />
      </head>
      <header>
        <div class="bg-danger text-white text-center py-4 mb-2"><h1>My Team</h1></div>
      <header>
      <body>
        <div class="d-flex flex-wrap justify-content-around align-items-center w-80">
          ${renderEmployeeCards(teamList)}
        </div>
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
  <div class="card w-33">
        <div class="card-header bg-primary text-white">
            <h4>${manager.getName()}<h4>
            <h5>${manager.getRole()}</h5>
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
  <div class="card w-33">
        <div class="card-header bg-primary text-white">
            <h4>${engineer.getName()}<h4>
            <h5>${engineer.getRole()}</h5>
        </div>
        <div class="card-body">
            <p class="id">ID: ${engineer.getId()}</p>
            <p class="email">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></p>
            <p class="office">GitHub: <a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></p>
        </div>
    </div>
    `
};

generateInternCard = (intern) => {
  return `
  <div class="card w-33">
        <div class="card-header bg-primary text-white">
            <h4>${intern.getName()}<h4>
            <h5>${intern.getRole()}</h5>
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
