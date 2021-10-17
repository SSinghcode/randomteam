const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

let teamMembers = [];

function runPrompter() {
    inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "what is the team manager's name?"
        },
        {
            type: "input",
            name: "mangerid",
            message: "What is the team manager's id?"
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is the team manager's email?"
        },
        {
            type: "input",
            name: "managerOfficenumber",
            message: "What is the team manager's office number?"
        },



    ]).then((response) => {

        const manager = new Manager(response.managerName, response.mangerid, response.managerOfficenumber)
        teamMembers.push(manager);
        optionprompt();
    }
    )
}
runPrompter()


// oprtions prompt
function optionprompt() {
    inquirer.prompt(
        [
            {
                type: "list",
                name: "team",
                message: "WWhich type of team member would you like to add?",
                choices: ["Engineer", "Intern", "i dont want to have team member"],
            }

        ]
    ).then((response => {
        console.log("enter")
        if (response.team === "Engineer") {
            console.log("second")
            enginnerprompt()
        }
        else if(response.team === "Intern"){
            console.log("hello")
            internprompt()

        }
    }))
}

// enginner prompt
function enginnerprompt(){
    inquirer.prompt([
        {
            type: "input",
            name: "engineer",
            message: "what is the team Engineer's name?"
        },
        {
            type: "input",
            name: "eid",
            message: "What is the team Engineer's id?"
        },
        {
            type: "input",
            name: "eemail",
            message: "What is the team Engineer's email?"
        },
        {
            type: "input",
            name: "egithub",
            message: "What is the team github's email?"

        },



    ]



    ).then((response => {
        const engineer = new Engineer(response.engineer, response.eid, response.eemail)
        teamMembers.push(engineer)
      
        optionprompt();
    }))
}

// intern prompt
function internprompt() {
    inquirer.prompt([
        {
            type: "input",
            name: "intern",
            message: "what is the team interns's name?"
        },
        {
            type: "input",
            name: "iid",
            message: "What is the team intern's id?"
        },
        {
            type: "input",
            name: "iemail",
            message: "What is the team intern's email?"
        },

        {
            type: "input",
            name: "school",
            message: "What is the intern's school?"

        },
       

    ]).then(response => {
        const intern = new Engineer(response.intern, response.iid,response.iemail, response.school)
        teamMembers.push(intern)
      
        optionprompt();
    })}