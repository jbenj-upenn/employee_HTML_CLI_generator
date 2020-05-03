const inquirer = require('inquirer');
const fs = require("fs");
// const generateMarkdown = require("generateMarkdown")

//========QUESTIONS FOR MANAGERS

const managerQs = [
{
    type: "input",
    name: "managerName",
    message: "What is the team manager's name?"
},
{
    type: "input",
    name: "managerID",
    message: "What is the manager's ID number?"
},
{
    type: "input",
    name: "managerOffice",
    message: "What is the manager's office number?"
},
{
    type: "list",
    name: "jobTitle",
    message: "Who is on her/his team?",
    choices: ["Engineer", "Intern"]
}
];

//========QUESTIONS FOR ENGINEERS
const engineerQs = [
    {
        type: "input",
        name: "engineerName",
        message: "What is the engineer's name?"
    },
    {
        type: "input",
        name: "engineerID",
        message: "What is the engineer's ID number?"
    },
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
    },
    {
        type: "input",
        name: "internID",
        message: "What is the intern's ID number?"
    },
    {
        type: "input",
        name: "internSchool",
        message: "Where does the intern study?"
    }
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), function(err) {
        if (err) {
          return console.log(err);
        }
        return("Here's your team!");
        console.log("Here's your team!");
      });
}

const askMQuestions = async (managerQs) => {
    const answers = await inquirer.prompt(questions).catch(err => err)
    // console.log(answers);
    return answers;
};
const askEQuestions = async (engineerQs) => {
    const answers = await inquirer.prompt(questions).catch(err => err)
    // console.log(answers);
    return answers;
};
const askIQuestions = async (internQs) => {
    const answers = await inquirer.prompt(questions).catch(err => err)
    // console.log(answers);
    return answers;
};

//========ANSWERS TO HTML FILES

// const init = async () => {
//     const userAnswers = await askQuestions(questions);
//  //    console.log(userAnswers);
//     writeToFile("exampleREADME.md", userAnswers)
//          }
 
//  init();