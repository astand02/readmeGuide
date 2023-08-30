// TODO: Include packages needed for this application
const { validateHeaderName } = require("http");
const inquirer = require("inquirer");
const { readMeFile } = require("fs").promises;
// TODO: Create an array of questions for user input
const questions = () => {
  return inquirer.prompt([
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("Enter your project title.");
        return false;
      }
    }
  },
  {
    type: "input",
    name: "description",
    message: "Provide a short description of your project..",
    validate: (descInput) => {
      if (descInput) {
        return true;
      } else {
        console.log("Enter description for your project.");
        return false;
      }
    }
  },
  {
    type: "input",
    name: "installation",
    message: "What are the steps required to install your project?",
    validate: (instInput) => {
      if (instInput) {
        return true;
      } else {
        console.log("Enter instructions on how to install your project.");
        return false;
      }
    }
  },
  {
    type: "input",
    name: "usage",
    message: "How can the user use your page?",
    validate: (useInput) => {
      if(useInput) {
        return true;
      } else {
        console.log("Enter how the project is used.");
        return false;
      }
    }
  },
  {
    type: "list",
    name: "license",
    message: "What type of license is used in your project?",
    choices: ["MIT", "Apache", "GPL"],
    validate: (licInput) => {
      if(licInput) {
        return true;
      } else {
        console.log("Select a License.");
        return false;
      }
    }
  },
  {
    type : "confirm",
    name: "contributors",
    message: "Is the user required to know anything about contributing to your project?"
  },
  {
    type: "input",
    name: "contConfirm",
    message: "List guidelines on how to contribute to the project.",
    validate: (contConfirm) => {
      if (contConfirm) {
        return true;
      } else {
        return false;
      }
    }
  },
  {
    type: "confirm",
    name: "test",
    message: "Are there any tests to provide the user with?"
  },
  {
    type: "input",
    name: "testConfirm",
    message: "Explain how users can test your project.",
    validate: (testConfirm) => {
      if(testConfirm){
        return true;
      } else {
        return false;
      }
    }
  },
  { 
    type: "input",
    name: "gitHub",
    message: "What is your GitHub username?",
    validate: (gitHub) => {
      if(gitHub) {
        return true;
      } else {
        console.log("Enter Username.");
        return false;
      }
    }
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
    validate: (email) => {
      if(email) {
        return true;
      } else {
        console.log("Enter email address.");
        return false;
      }
    }
  },
  {
    type: "input",
    name: "questions",
    message: "List instructions on how to contact you.",
    validate: (qInput) => {
      if(qInput) {
        return true;
      } else {
        return false;
      }
    }
  },
]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
