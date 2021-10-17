const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const path = require("./lib/generatemarkdown");

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
        else{
            buildteam();
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


function buildteam(){



 genratecard=>{ return card
     `
     return <div class="card" style="width: 18rem;">
  
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Cras justo odio</li>
    <li class="list-group-item">Dapibus ac facilisis in</li>
    <li class="list-group-item">Vestibulum at eros</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>`
 }



















    const data = `
    <!doctype html>
    <html lang="en">
      <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    
        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    
        <title>Hello, world!</title>
      </head>
      <body>
      
     <div></div>
    
        <!-- Optional JavaScript -->
        <!-- jQuery first, then Popper.js, then Bootstrap JS -->
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
      </body>
    </html>
    
    `
            ;




 fs.writeFile("./dist/index.html", data, (err) => err ? console.error(err) : console.log())
 fs.writeFileSync()


}


