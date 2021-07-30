const inquirer = require(`inquirer`);
const generateMarkdown = require(`./src/markdown-template.js`);
const writeFile = require(`./utils/generate-markdown.js`);

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

promptUser()
  .then(answers => {
    return generateMarkdown(answers);
  })
  .then(markdown => {
    return writeFile(markdown);
  })
  .catch(err => {
    console.log(err);
  });
