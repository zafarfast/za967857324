const inquirer = require('inquirer')
const fs = require('fs')

let userInput = {
    projectName : "",
    projectDescription : "",
    installationIns : "",
    usage : "",
    license : "",
    contribute : "",
    test : "",
    github : "",
    email : ""
   }

   
inquirer.prompt([
    {
        name: "projectName",
        type: "input",
        message: "Enter project name: "
  
    },
    {
        name: "projectDescription",
        type: "input",
        message: "Enter project description: "
  
    },
    {
        name: "installationInstructions",
        type: "input",
        message: "Enter installationdata instructions: "
  
    },
    {
        name: "usage",
        type: "input",
        message: "Enter usage instructions: "
  
    },
    {
        name: "license",
        type: "list",
        message: "Choose license: ",
        choices: ["MIT", "GNU", "Apache", "Mozilla"],
        default: 'MIT'
  
    },
    {
        name: "contribute",
        type: "input",
        message: "Describe how others can contribute to this project: "
  
    },
    {
        name: "test",
        type: "input",
        message: "Enter test instructions: "
  
    },
    {
        name: "github",
        type: "input",
        message: "Enter project's Github URL: "
  
    },
    {
        name: "email",
        type: "input",
        message: "Enter your email address: "
  
    }



]).then((response)=>{

    userInput.projectName = response.projectName;
    userInput.projectDescription = response.projectDescription;
    userInput.installationIns = response.installationInstructions;
    userInput.usage = response.usage;
    userInput.license = response.license;
    userInput.contribute = response.contribute;
    userInput.test = response.test
    userInput.github = response.github
    userInput.email = response.email

    let readmeMarkup = `![License.](https://img.shields.io/static/v1?label=License&message=${userInput.license}&color=gold)    

   # Project Title
   ${userInput.projectName}
   
   
   ## Description
   ${userInput.projectDescription}
   
   
   ## Table of Contents
   
   [Installation](#installation)
   
   [Usage](#usage)
   
   [License](#license)
   
   [Contributing](#contributing)
   
   [Tests](#tests)
   
   [Questions](#questions)
   
   
   
   
   ## Installation
   ${userInput.installationIns}
   
   ## Usage
   ${userInput.usage}
   
   ## License 
   This application is covered under ${userInput.license}.
   
   ## Contributing 
   ${userInput.contribute}
   
   ## Tests 
   ${userInput.test}
   
   ## Questions
   
   Github: ${userInput.github}
       
   If you wish to reach out to me, my email adddress is <a href='mailto:${userInput.email}'> ${userInput.email} </a>
      
    `;


    fs.writeFile('readme2.md',readmeMarkup,(err)=>{console.log(err)})
})