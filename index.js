const inquirer = require('inquirer');
const fs = require("fs");

inquirer
    .prompt([
        {type: "input", name: "title", message: "enter project title"},
        {type: "input", name: "description", message: "enter project description"},
        {type: "input", name: "installation", message: "enter installation instructions"},
        {type: "input", name: "usageInfo", message: "enter usage information"},
        {type: "input", name: "constribution", message: "enter contribution guidelines"},
        {type: "input", name: "test", message: "enter test instructions"},
        {type: "list", name: "license", message: "select a license type", choices['MIT', ]},
        /* Pass your questions in here */
    ])
    .then(({testInput, testInput3}) => {
        const readme = 
        `# ${testInput} 09 Node.js Homework: Professional README Generator`;

        
        

        fs.writeFile("README_Generator.md", readme, (err) => {
            if(err) throw err;
            console.log("complete");
        })
    })
    .catch(err => console.log(err));