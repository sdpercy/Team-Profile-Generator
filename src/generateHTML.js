//create Manager's Card
const generateManager= function (Manager) {
    return `
    <div class="card">
        <div class="card-divder">
            <h3>${manager.name}</h3>
            <h4>Manager</h4><span class="material-icons">groups</span>
        </div>
        <div class="card-section">
            <p class="id">ID: ${manager.id}</p>
            <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
            <p class="office">Office Number: ${manager.officeNumber}
        </div>
    </div>
    `
};
//create Engineer's Card

const generateEngineer = function (engineer) {
    return `
    <div class="card">
        <div class="card-divder">
            <h3>${engineer.name}</h3>
            <h4>Engineer</h4><span class="material-icons">engineering</span>
        </div>
        <div class="card-section">
            <p class="id">ID: ${engineer.id}</p>
            <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
            <p class="github">GitHub: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
        </div>
    </div>
    `
};    

//create Intern's Card

const generateIntern = function (intern){
    return `
    <div class="card">
        <div class="card-divder">
            <h3>${intern.name}</h3>
            <h4>Manager</h4><span class="material-icons">school</span>
        </div>
        <div class="card-section">
            <p class="id">ID: ${intern.id}</p>
            <p class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
            <p class="office">School: ${intern.school}</p>
        </div>
    </div>
    `
};

//Move array to html page

generateHTML = (data) => {
    //array for cards
    cardArray = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();
        //Invoke the Manager function
        if (role === "Manager") {
            const managerInfo = generateManager(employee);

            cardArray.push(managerInfo);
        }
        //Invoke the Engineer function
        if (role === "Engineer") {
            const engineerInfo = generateEngineer(employee);

            pageArray.push(engineerInfo);
        }
        //Invoke the Intern function
        if (role === "Intern") {
            const internInfo = generateIntern(employee);

            pageArray.push(internInfo);
        }    
    }

    //join the strings together
    const employeeInfo = cardArray.join('')

    const generateTeam = generateTeamHTML(employeeInfo);
    return generateTeam;

}

//create the html page

const generateTeamHTML = function (employeeInfo) {
    return `
    <!doctype html>
    <html class="no-js" lang="en">
        <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Team Page</title>
            <link rel="stylesheet" href="https://dhbhdrzi4tiry.cloudfront.net/cdn/sites/foundation.min.css">
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
            <link rel="stylesheet" href="style.css">
        </head>
        <body>
        <div class="top-bar">
            <div class="top-bar-left">
                <ul class="header">
                    <li class="header-text">${manager.id}</li>
                </ul>
            </div>
        </div>
        <!--Main section content-->
    
        <div id="main" class="grid-x main-section">
            <div class="row small-up-2 medium-up-3 card-container">
                ${employeeCards}
            </div>
        </div>

        <script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
        <script src="https://dhbhdrzi4tiry.cloudfront.net/cdn/sites/foundation.js"></script>
        <script>
            $(document).foundation();
        </script>
        </body>
    </html>
    `;
}

module.exports = generateHTML;
    
