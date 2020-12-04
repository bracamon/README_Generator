// function to generate markdown for README
function generateMarkdown(response) {
    return `# ${response.title}

[![License: ${response.license}](https://img.shields.io/badge/License-${response.license}-blue.svg)](https://opensource.org/licenses/${response.license})

# ${response.title}

## Description
${response.description}

<br>

## Table of Contents
* [Installation Instructions](#installation-instructions)
* [Usage Information](#usage-information)
* [Contribution Guidelines](#contribution-guidelines)
* [License Type](#license-type)
* [Test Instructions](#test-instructions)
* [Questions](#questions)

<br>

## Installation Instructions
${response.installation}

<br>

## Usage Information
${response.usageInfo}

<br>

## Contribution Guidelines
${response.contribution}

<br>

## License Type
This project makes use of the ${response.license} license. 
For more information, visit: https://opensource.org/licenses/${response.license}

<br>

## Test Instructions
${response.test}

<br>

## Questions
If you have any questions, please send me a message at: ${response.email}
or check out my github page at: https://github.com/${response.gitHubUser}

    `;
};

module.exports = generateMarkdown;