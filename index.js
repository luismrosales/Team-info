const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const { generateHtml } = require("./src/generateHtml");

const managerArray = [];
const engineerArray = [];
const internArray = [];

const questions = async () => {
  try {
    const answers = await inquirer.prompt([
      {
        type: "confirm",
        name: "createEmployee",
        message: "Would you like to create an employee?",
        default: false,
      },
    ]);
    if (answers.createEmployee === true) {
      employeeType();
    } else {
      const html = generateHtml(managerArray, engineerArray, internArray);
      fs.writeFile("./dist/index.html", html, (error) => {
        if (error) {
          return error;
        }
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const employeeType = async () => {
  try {
    const employeeAnswer = await inquirer.prompt([
      {
        type: "list",
        name: "employeeList",
        message: "Select an employee type",
        choices: ["Manager", "Engineer", "Intern"],
      },
    ]);
    switch (employeeAnswer.employeeList) {
      case "Manager":
        manager();
        break;
      case "Engineer":
        engineer();
        break;
      default:
        intern();
    }
  } catch (error) {
    console.log(error);
  }
};

const manager = async () => {
  try {
    const managerAnswer = await inquirer.prompt([
      {
        type: "input",
        name: "manager",
        message: "Enter the team managers name!",
      },
      {
        type: "input",
        name: "managerId",
        message: "Enter employee ID!",
      },
      {
        type: "input",
        name: "managerEmail",
        message: "Enter manager email address!",
      },

      {
        type: "number",
        name: "officeNumber",
        message: "Enter office number!",
      },
    ]);
    console.log(managerAnswer);
    const { manager, managerId, managerEmail, officeNumber } = managerAnswer;
    const newManager = new Manager(
      manager,
      managerId,
      managerEmail,
      officeNumber
    );
    managerArray.push(newManager);
    questions();
  } catch (error) {
    console.log(error);
  }
};

const engineer = async () => {
  try {
    const engineerAnswer = await inquirer.prompt([
      {
        type: "input",
        name: "engineer",
        message: "Enter engineer name",
      },
      {
        type: "input",
        name: "engineerId",
        message: "Enter engineer ID",
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "Enter engineer email",
      },
      {
        type: "input",
        name: "engineerGithub",
        message: "Enter engineer Github username",
      },
    ]);
    console.log(engineerAnswer);
    const { engineer, engineerId, engineerEmail, engineerGithub } =
      engineerAnswer;
    const newEngineer = new Engineer(
      engineer,
      engineerId,
      engineerEmail,
      engineerGithub
    );
    engineerArray.push(newEngineer);
    questions();
  } catch (error) {
    console.log(error);
  }
};

const intern = async () => {
  try {
    const internAnswer = await inquirer.prompt([
      {
        type: "input",
        name: "intern",
        message: "Enter intern name",
      },
      {
        type: "input",
        name: "internId",
        message: "Enter intern ID",
      },
      {
        type: "input",
        name: "internEmail",
        message: "Enter intern email",
      },
      {
        type: "input",
        name: "internSchool",
        message: "Enter intern's school",
      },
    ]);
    console.log(internAnswer);
    const { intern, internId, internEmail, internSchool } = internAnswer;
    const newIntern = new Intern(intern, internId, internEmail, internSchool);
    internArray.push(newIntern);
    questions();
  } catch (error) {
    console.log(error);
  }
};

// fs.writeFile("./dist/index.html", data, () => {
//   if (err) {
//     return err;
//   }
//   console.log("sucess");
// });

function initialize() {
  questions();
}

initialize();
