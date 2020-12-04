const inquirer = require('inquirer');
const fs = require("fs");

inquirer
    .prompt([
        {type: "input", name: "projectTitle", message: "enter project title"},
        {type: "input", name: "description", message: "enter project description"},
        {type: "input", name: "installation", message: "enter installation instructions"},
        {type: "input", name: "usageInfo", message: "enter usage information"},
        {type: "input", name: "constribution", message: "enter contribution guidelines"},
        {type: "input", name: "test", message: "enter test instructions"},
        {type: "list", name: "license", message: "select license type", choices: ['MIT', '2']},
        {type: "input", name: "gitHubUser", message: "enter github user name"},
        {type: "input", name: "email", message: "enter your email address"},
        {type: "input", name: "test", message: "enter test instructions"},
        /* Pass your questions in here */
    ])
    .then(({projectTitle, description}) => {
        const readme = 
        `# ${projectTitle} 09 Node.js Homework: Professional README Generator`;

        
        

        fs.writeFile("README_Generator.md", readme, (err) => {
            if(err) throw err;
            console.log("complete");
        })
    })
    .catch(err => console.log(err));