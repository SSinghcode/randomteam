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
    }
    )
}
runPrompter()