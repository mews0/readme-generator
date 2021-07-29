// TODO: Include packages needed for this application
const inquirer = require(`inquirer`);
const fs = require(`fs`);
const generateMarkdown = require(`./utils/generateMarkdown.js`);

// TODO: Create an array of questions for user input
const promptUser = () => {
  console.log(`
================
README Generator
================
`);
  return inquirer.prompt([
    {
      type: `input`,
      name: `title`,
      message: `Project title: `,
      validate: titleInput => {
        if (titleInput) {
          return true;
        } else {
          console.log(`You need to enter a project title!`);
          return false;
        }
      }
    },
    {
      type: `input`,
      name: `description`,
      message: `Description: `,
      validate: descriptionInput => {
        if (descriptionInput) {
          return true;
        } else {
          console.log(`You need to enter a project description!`);
          return false;
        }
      }
    },
    {
      type: `input`,
      name: `installation`,
      message: `Installation instructions: `,
      validate: installationInput => {
        if (installationInput) {
          return true;
        } else {
          console.log(`You need to enter installation instructions!`);
          return false;
        }
      }
    },
    {
      type: `input`,
      name: `usage`,
      message: `Usage information: `,
      validate: usageInput => {
        if (usageInput) {
          return true;
        } else {
          console.log(`You need to enter usage information!`);
          return false;
        }
      }
    },
    {
      type: `input`,
      name: `contribution`,
      message: `Contribution guidelines: `,
      validate: contributionInput => {
        if (contributionInput) {
          return true;
        } else {
          console.log(`You need to enter contribution guidelines!`);
          return false;
        }
      }
    },
    {
      type: `input`,
      name: `test`,
      message: `Test instructions: `,
      validate: testInput => {
        if (testInput) {
          return true;
        } else {
          console.log(`You need to enter test instructions!`);
          return false;
        }
      }
    },
    {
      type: `list`,
      name: `license`,
      message: `License for application: `,
      choices: [`GNU AGPLv3`, `GNU GPLv3`, `GNU LGPLv3`, `Mozilla Public License 2.0`, `Apache License 2.0`, `MIT License`, `Boost Software License 1.0`, `The Unlicense`]
    },
    {
      type: `input`,
      name: `github`,
      message: `GitHub username: `,
      validate: githubInput => {
        if (githubInput) {
          return true;
        } else {
          console.log(`You need to enter a GitHub username!`);
          return false;
        }
      }
    },
    {
      type: `input`,
      name: `email`,
      message: `Email address: `,
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log(`You need to enter an email address!`);
          return false;
        }
      }
    }
  ])
  .then(answers => {
    console.log(answers);
    return answers;
  });
};

// this function might go inside init()
promptUser();
// then
// catch

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// I don't know if the init() function is necessary

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
