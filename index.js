const generateHTML = require('./src/generateHTML');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const fs = require('fs');
const inquirer = require('inquirer');


const teamProfileArray = [];

const addTeamManager = () => {
    return inquirer.prompt ([
    {
        type: 'input',
        name: 'name',
        message:  "What is the managers name?",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log ("Please enter a manager name!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "Please enter the manager id",
        validate: nameInput => {
            if (isNAN(nameInput)) {
                console.log ("Please enter a manager ID!");
                return false;
            } else { 
                return ture;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "Please enter the manager email address.",
        // found solution for validation on https://gist.github.com/Amitabh-K/ae073eea3d5207efaddffde19b1618e8
        
        validate: email => {
            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
            if (valid) {
                return true;
            } else {
                console.log ("Please enter a vaild email address!");
                return false;
            }
        
        }
    },

])

    .then(managerInput => {
        const {name, id, email, officeNumber } = managerInput;
        const manager = new Manager(name, id, email, officeNumber);

        teamProfileArray.push(manager);
    })
};

const addEmployee = () => {
    console.log(`Adding employee to the team`);

    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "Please choose your employees role?", 
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "Please enter the name of the employee?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter an employee's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the employee's id",
            validate: nameInput => {
                if (isNAN(nameInput)) {
                    console.log ("Please enter a employee's ID!");
                    return false;
                } else { 
                    return ture;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the employee's email address.",
            // found solution for email validation on https://gist.github.com/Amitabh-K/ae073eea3d5207efaddffde19b1618e8
            
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ("Please enter a vaild email address!");
                    return false;
                }
            
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter employee's GitHub username.",
            when: (input) => input.role === "Engineer",
            validate: nameInput => {
                if (nameInput){
                    return true;
                }else{
                    console.log ("Please enter the employee's GitHub username!");
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter Intern's school?",
            when: (input) => input.role === "Intern",
            validate: nameInput => {
                if (nameInput){
                    return true;
                }else{
                    console.log ("Please enter the Intern's school!");
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddNewEmployee',
            message: "Would you like to add another team member?",
            default: false
        }
    ])
    .then(employeeInput => {

        let {name, id, email, role, github, school, confirmAddNewEmployee} = employeeInput;
        let employee;

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);

        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);
        }

        teamProfileArray.push(employee);

        if (confirmAddNewEmployee) {
            return addEmployee(teamProfileArray);
        }else {
            return teamProfileArray;
        }
    })
};

const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        }else {
            console.log("Your team profile has beem created successfully!")
        }
    })
};

addTeamManager ()
.then(addEmployee)
.then(teamProfileArray => {
    return generateHTML(teamProfileArray);
})
.then(pageHTML => {
    return writeFile(pageHTML);
})
.catch(err => {
    console.log(err);
});