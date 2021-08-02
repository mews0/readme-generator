generateMarkdown = data => {

  // if data.license contains spaces, then convert spaces to '%20' for correct URL
  return `# ${data.title}
  
![Badge](https://img.shields.io/badge/license-${data.license.replace(` `, `%20`)}-blue)

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [Test](#test)
* [License](#license)
* [GitHub](#github)
* [Email](#email)

## Installation
${data.installation}

## Usage
${data.usage}

## Contribution
${data.contribution}

## Test
${data.test}

## License
${data.license}

## GitHub
${data.github}

## Email
${data.email}
`;
}

module.exports = generateMarkdown;
