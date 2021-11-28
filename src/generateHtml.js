function generateHtml(manager, engineer, intern) {
  return `
    <!DOCTYPE HTML>
    <html lang='en'>
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css" />
    <title>Team info</title>
    </head>

    <body>
    <h1 class="team">My Team</h1>

    ${managerLoop(manager)}
    
    ${engineerLoop(engineer)}
    ${internLoop(intern)}

    </body>
    
    `;
}

function managerLoop(manager) {
  let str = "";
  for (let i = 0; i < manager.length; i++) {
    str =
      str +
      ` <div class="card">
    <h2>${manager[i].name}</h2>
    <h3>Manager</h3>
    <div class="container">
    <p>ID: ${manager[i].id}</p>
    <p>Email: ${manager[i].email}</p>
    <p>Office number: ${manager[i].officeNumber}</p>
    </div>
    </div>`;
  }

  return str;
}

function engineerLoop(engineer) {
  let str = "";
  for (let i = 0; i < engineer.length; i++) {
    str =
      str +
      ` <div class="card">
    <h2>${engineer[i].name}</h2>
    <h3>Engineer</h3>
    <div class="container">
    <p>ID: ${engineer[i].id}</p>
    <p>Email: ${engineer[i].email}</p>
    <p>Github: ${engineer[i].github}</p>
    </div>
    </div>`;
  }

  return str;
}

function internLoop(intern) {
  let str = "";
  for (let i = 0; i < intern.length; i++) {
    str =
      str +
      ` <div class="card">
    <h2>${intern[i].name}</h2>
    <h3>Intern</h3>
    <div class="container">
    <p>ID: ${intern[i].id}</p>
    <p>Email: ${intern[i].email}</p>
    <p>School: ${intern[i].school}</p>
    </div>
    </div>`;
  }

  return str;
}

module.exports = { generateHtml };
