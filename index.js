const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")

const inquirer = require('inquirer');
const fs = require("fs");
const path = require("path");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer")
// const generateMarkdown = require("generateMarkdown")

const team = []

//========INITIAL QUESTIONS
const initialQs = [
    {
        type: "list",
        name: "addTeamMember",
        message: "Who do you want to add to the team?",
        choices: ["Manager", "Engineer", "Intern", "Done"]
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
        name: "managerEmail",
        message: "What is the manager's email address?",
        validate: function (email) {
           return validateEmail(email) 
           
        }
    },
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
    },
    {
        type: "input",
        name: "engineerID",
        message: "What is the engineer's ID number?"
    },
    {
        type: "input",
        name: "engineerEmail",
        message: "What is the engineer's email address?",
        validate: function (email) {
            return validateEmail(email) 
            
         }
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
        name: "internEmail",
        message: "What is the intern's email address?",
         validate: function (email) {
           return validateEmail(email) 
           
        }
    },
    {
        type: "input",
        name: "internSchool",
        message: "Where does the intern study?"
    }
];


// ============FINAL QUESTION
const finalQs = [
    {
        type: "confirm",
        name: "continue",
        message: "Would you like to add anyone else to the team?",
    },
];
//============================

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

//attempting to ask this yes/no question and start the process over if return is true/yes
// const askFQuestions = async (finalQs) => {
//     const answers = await inquirer.prompt(finalQs).catch(err => err);
//     if(answers.continue === true) {
//         askInitQuestions(initialQs);
//     }else{

const createHTML = () => {
    fs.writeFile(outputPath, render(team), function (err) {
        if (err) {
            throw err;
        }
    });
}
// console.log(answers);

//===========================

//============VALIDATE EMAIL ADDRESSES W REGEX

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if( re.test(email)) {
            return(true)
        }else{
            return('Please enter a valid email address')
        };
}

//=========CALL QUESTIONS
const init = async () => {
    const userAnswers = await askInitQuestions(initialQs);

    const { addTeamMember } = userAnswers
    if (addTeamMember === 'Manager') {
        const userAnswers = await askMQuestions(managerQs);
        console.log(userAnswers)
        const newMan = new Manager(userAnswers.managerName, userAnswers.managerID, userAnswers.managerEmail, userAnswers.managerOffice);
        console.log(newMan);
        team.push(newMan);
        console.log(team);
        // createHTML();
        init()
        //create new M class

        //once created push to an array 

    } else if (addTeamMember === 'Engineer') {
        const userAnswers = await askEQuestions(engineerQs);
        console.log(userAnswers)
        const newEng = new Engineer(userAnswers.engineerName, userAnswers.engineerID, userAnswers.engineerEmail, userAnswers.engineerGHUN);
        console.log(newEng);
        team.push(newEng);
        console.log(team);
        // createHTML();
        init()

    } else if (addTeamMember === "Intern") {
        const userAnswers = await askIQuestions(internQs);
        console.log(userAnswers)
        const newInt = new Intern(userAnswers.internName, userAnswers.internID, userAnswers.internEmail, userAnswers.internSchool);
        console.log(newInt);
        team.push(newInt);
        console.log(team);
        // createHTML();
        init()
    } else {
        createHTML();

    };
}

// createHTML();

//    console.log(userAnswers);
// writeToFile("exampleREADME.md", userAnswers)

//========ANSWERS TO HTML FILES

// const init = async () => {
//     const userAnswers = await askQuestions(questions);
//  //    console.log(userAnswers);
//     writeToFile("exampleREADME.md", userAnswers)
//          }

init();