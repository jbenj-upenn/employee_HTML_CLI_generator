const inquirer = require('inquirer');
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")

//========QUESTIONS FOR MANAGERS

const initialQs = [
{
    type: "input",
    name: "managerName",
    message: "What is the team manager's name?"
},
{
    type: "list",
    name: "jobTitle",
    message: "Who is on her/his team?",
    choices: ["Engineer", "Intern"]
},
{
    type: "input",
    name: "managerID",
    message: "What is the manager's ID number?"
}
{
    type: "input",
    name: "managerOffice",
    message: "What is the manager's office number?"
}

];

//========QUESTIONS FOR ENGINEERS
const engineerQs = [
    {
        type: "input",
        name: "engineerName",
        message: "What is the engineer's name?"
    }
    {
        type: "input",
        name: "engineerID",
        message: "What is the engineer's ID number?"
    }
    {
        type: "input",
        name: "engineerGHUN",
        message: "What is the engineer's github.com User Name?"
    }
];

//========QUESTIONS FOR INTERNS
const internQs = [
    {
        type: "input",
        name: "internName",
        message: "What is the intern's name?"
    }
    {
        type: "input",
        name: "internID",
        message: "What is the intern's ID number?"
    }
    {
        type: "input",
        name: "internSchool",
        message: "Where does the intern study?"
    }
