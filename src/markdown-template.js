generateMarkdown = data => {
  // if data.license contains spaces, then convert spaces to '%20' for correct URL
  data.license = data.license.replace(` `, `%20`);
  
  return `# ${data.title}

https://img.shields.io/badge/license-${data.license}-blue

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
