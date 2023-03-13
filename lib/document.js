createManagerCard = (manager) => {
  return `
    <div class="card">
        div class="card-header">
            <h2>${manager.name}<h2>
        </div>
        <div class="card-body">
            <p class="id">ID: ${manager.id}</p>
            <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
            <p class="office">Office Number: ${manager.office}</p>
        </div>
    </div>`;
};

createDocument = (title, data) => {
  teamList = [];

  return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${title}</title>
        <link rel="stylesheet" href="../dist/style.css" />
      </head>
      <body>
        ${createManagerCard}
      </body>
    </html>
    `;
};

module.exports = { createDocument };
