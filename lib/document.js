generateManagerCard = (manager) => {
  return `
    <div class="card">
        div class="card-header">
            <h2>${manager.getName()}<h2>
        </div>
        <div class="card-body">
            <p class="id">ID: ${manager.getId()}</p>
            <p class="email">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></p>
            <p class="office">Office Number: ${manager.officeNumber()}</p>
        </div>
    </div>`;
};

renderEmployeeCards = (teamList) => {
    // Will creat HTML card elements for each employee in the last of employees depending on their role
    for (let employee of teamList) {
        if (employee.getRole() === 'Manager') {
            return generateManagerCard();
        }
    }
}

createDocument = (team) => {
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
        ${renderEmployeeCards(team)}
      </body>
    </html>
    `;
};

module.exports = { createDocument };
