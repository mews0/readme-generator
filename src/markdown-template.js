generateMarkdown = data => {
  return `# ${data.title}

https://img.shields.io/badge/<license>-<${data.license}>-<informational>

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)

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
