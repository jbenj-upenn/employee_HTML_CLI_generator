const inquirer = require('inquirer');
const fs = require("fs");
const htmlRender = require("./lib/htmlRenderer")
// const generateMarkdown = require("generateMarkdown")
const team = []

//========INITIAL QUESTIONS
const initialQs = [
    {
        type: "list",
        name: "addTeamMember",
        message: "Who do you want to add to the team?",
        choices: ["Manager", "Engineer", "Intern"]
    },
]

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
        type: "input",
        name: "managerEmail",
        message: "What is the manager's email address?"
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
    },
    {
        type: "input",
        name: "engineerEmail",
        message: "What is the engineer's email address?"
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
    },
    {
        type: "input",
        name: "internEmail",
        message: "What is the intern's email address?"
    }
];

// ============FINAL QUESTION
// const finalQs = [
//     {
//         type: "list",
//         name: "addTeamMember",
//         message: "Who do you want to add to the team?",
//         choices: ["Manager", "Engineer", "Intern", "No one else for now"]
//     },
// ];

//======not necessary for now
// function writeToFile(fileName, data) {
//     fs.writeFile(fileName, generateMarkdown(data), function(err) {
//         if (err) {
//           return console.log(err);
//         }
//         return("Here's your team!");
//         console.log("Here's your team!");
//       });
// }

// ===========PROMPT QUESTIONS
const askInitQuestions = async (initialQs) => {
    const answers = await inquirer.prompt(initialQs).catch(err => err)
    return answers;
};
const askMQuestions = async (managerQs) => {
    const answers = await inquirer.prompt(managerQs).catch(err => err)
    // console.log(answers);
    return answers;
};
const askEQuestions = async (engineerQs) => {
    const answers = await inquirer.prompt(engineerQs).catch(err => err)
    // console.log(answers);
    return answers;
};
const askIQuestions = async (internQs) => {
    const answers = await inquirer.prompt(internQs).catch(err => err)
    // console.log(answers);
    return answers;
};
const askFQuestions = async (finalQs) => {
    const answers = await inquirer.prompt(finalQs).catch(err => err)
    // console.log(answers);
    return answers;
};

//=========CALL QUESTIONS
const init = async () => {
    const userAnswers = await askInitQuestions(initialQs);

    const {addTeamMember} = userAnswers
    if(addTeamMember === 'Manager') {
        const userAnswers = await askMQuestions(managerQs);
    

        //create new M class

        //once created push to an array 

    }else if(addTeamMember === 'Engineer'){
        const userAnswers = await askEQuestions(engineerQs);

    }else if (addTeamMember === "Intern"){
        const userAnswers = await askIQuestions(internQs);

    }else{
        const html = htmlRender(team)

    }
    }


    //    console.log(userAnswers);
    // writeToFile("exampleREADME.md", userAnswers)

//========ANSWERS TO HTML FILES

// const init = async () => {
//     const userAnswers = await askQuestions(questions);
//  //    console.log(userAnswers);
//     writeToFile("exampleREADME.md", userAnswers)
//          }

 init();