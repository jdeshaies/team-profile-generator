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
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">
        <link rel="stylesheet" href="../dist/style.css" />
      </head>
      <header>
        <div class="bg-danger text-white text-center py-4 mb-2"><h1>My Team</h1></div>
      <header>
      <body>
        <div class="row justify-content-center px-2">
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
  <div class="col-4 mt-4">
    <div class="card h-100">
          <div class="card-header bg-primary text-white">
              <h4>${manager.getName()}<h4>
              <h5><i class="fas fa-user-tie mr-2"></i>${manager.getRole()}</h5>
          </div>
          <div class="card-body">
              <p class="id"><b>ID:</b> ${manager.getId()}</p>
              <p class="email"><b>Email:</b> <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></p>
              <p class="office"><b>Office Number:</b> ${manager.getOfficeNumber()}</p>
          </div>
    </div>
  </div>
  `
};

generateEngineerCard = (engineer) => {
  return `
  <div class="col-4 mt-4">
    <div class="card h-100">
          <div class="card-header bg-primary text-white">
              <h4>${engineer.getName()}<h4>
              <h5><i class="fas fa-user mr-2"></i>${engineer.getRole()}</h5>
          </div>
          <div class="card-body">
              <p class="id"><b>ID:</b> ${engineer.getId()}</p>
              <p class="email"><b>Email</b>: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></p>
              <p class="office"><b>GitHub</b>: <a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></p>
          </div>
    </div>
  </div>
  `
};

generateInternCard = (intern) => {
  return `
  <div class="col-4 mt-4">
    <div class="card h-100">
        <div class="card-header bg-primary text-white">
            <h4>${intern.getName()}<h4>
            <h5><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h5>
        </div>
        <div class="card-body">
            <p class="id"><b>ID:</b> ${intern.getId()}</p>
            <p class="email"><b>Email:</b> <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></p>
            <p class="office"><b>School:</b> ${intern.getSchool()}</p>
        </div>
    </div>
  </div>
  `
};

module.exports = { createDocument };
