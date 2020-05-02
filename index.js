const inquirer = require('inquirer');
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")

//========QUESTIONS FOR EMPLOYEES

const questions = [
{
    type: "input",
    name:"employeeName",
    message: "What is the name of the Team Manager who you're looking for?"
},
{
    type: "list",
    name:"jobTitle",
    message: "What is her/his job title?",
    choices: ["Manager", "Engineer", "Intern"]
},
{
    type: "input",
    name:"idNumber",
    message: "What is his/her ID number?"
},
{
    type: "input",
    name:"email",
    message: "What is her/his email address?"
},
{
    type: "list",
    name:"license",
    message: "What licensing does it use?",
    choices: ["Apache", "MIT", "ISC"]
},
{
    type: "input",
    name:"contributors",
    message: "Who has contributed to your project?"
},
// 
{
    type: "input",
    name: "questions",
    message: "What's your github.com User Name?"
},
];