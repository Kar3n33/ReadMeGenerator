const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions = () => 
    inquirer.prompt([
        {
          type: 'input',
          name: 'Github',
          message: 'What is your Github Username?',
        },
        {
          type: 'input',
          name: 'Email',
          message: 'What is your email address?',
        },
        {
          type: 'input',
          name: 'title',
          message: 'What is your projects name?',
        },
        {
          type: 'input',
          name: 'description',
          message: 'Please write a short description of your project',
        },
        {
          type: 'input',
          name: 'license',
          message: 'What kind of license should your project have?',
          choices: ["MIT", 
          "APACHE 2.0", 
          "GPL 3.0", 
          "BSD 3", 
          "NONE"]
        },

        {
          type: 'input',
          name: 'installation',
          message: 'What command should be run to install depencies?',
          choice: "npm i"
        },

        {
          type: 'input',
          name: 'test',
          message: 'What command should be run to run tests?',
          choice: ["npm test"]
        },
        {
          type: 'input',
          name: 'usingrepo',
          message: 'What does the user need to know about using the repo?',
        },
        {
          type: 'input',
          name: 'contributing',
          message: 'What does the user need to know about contributing to the repo?',
        },
    
      ])
    


// function to write README file

    function generateMarkdown(data) {
      return `# My Project Name: ${data.title}
      
      ##License
      ${data.license}

      ## Description 
      ${data.description}

      ## Table of Contents:
      
      * [Installation](#installation)
      * [Usage](#usage)
      * [License](#license)
      * [Contributing](#contributing)
      * [Test](#test)
    
      ## Installation
       ${data.installation}

      ## Usage 
      ${data.usage}

      ## License 
      ${data.license}

      ## Contributing 
      ${data.contributing}

      ## Test 
      The application will be evoked using the following command:
    '''bash
    ${data.test}
    '''
    
      ## Questions
      If you have any additional questions you can reach me on my Github:${data.Github} or Email:${data.Email}
      `;
      }


questions()
.then((data) => writeFileAsync("ReadMe.md", generateMarkdown(data)))
.then(() => console.log('Successfully generated ReadMe file'))
.catch((err) => console.error(err));

