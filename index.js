// for inquirer
const inquirer = require('inquirer');
// for writing to markdown file
const fs = require("fs");
// access to markdown template
const generateMarkdown = require("./utils/generateMarkdown");



// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if(err) throw err;
        console.log("complete");
    });
}

// function to initialize program
function init() {
    inquirer
        .prompt([
            {type: "input", name: "title", message: "enter project title"},
            {type: "input", name: "description", message: "enter project description"},
            {type: "input", name: "installation", message: "enter installation instructions"},
            {type: "input", name: "usageInfo", message: "enter usage information"},
            {type: "input", name: "contribution", message: "enter contribution guidelines"},
            {type: "input", name: "test", message: "enter test instructions"},
            {type: "list", name: "license", message: "select license type", choices: ['MIT', 'ISC', 'PDDL', 'ODbL']},
            {type: "input", name: "gitHubUser", message: "enter github user name"},
            {type: "input", name: "email", message: "enter your email address"},

        ])
        .then((response) => {
            let data = generateMarkdown(response);
            writeToFile("README_generated.md", data)
            });
}

// function call to initialize program
init();