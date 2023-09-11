// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");
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
    name: "install",
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
    name: "contConfirm",
    message: "Is the user required to know anything about contributing to your project?"
  },
  {
    type: "input",
    name: "contributing",
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
    name: "testConfirm",
    message: "Are there any tests to provide the user with?"
  },
  {
    type: "input",
    name: "test",
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
]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, error => {
    if(error){
      return console.log(error);
    } else {
      return console.log("Successfully created README.md file!")
    }
  });
}


// TODO: Create a function to initialize app
function init() {
  return questions ()
  .then((answers) => {
    return generateMarkdown(answers);
  })
  .then((data) => {
    return writeToFile('README.md',data);
  })
  .catch((error) => {
    console.log(error);
  })
};

// Function call to initialize app
init();
