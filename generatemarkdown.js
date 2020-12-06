// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
    ![Github License]${license}
  ## Description ${data.description}
  ## Table of Contents
  
  *[Installation](#Installation)
  *[Usage](#Usage)
  *[License](#License)
  *[Contributing](#Contributing)
  *[Test](#Test)

  ## Installation ${data.installation}
  ## Usage ${data.usage}
  ## License ${data.license}
  ## Contributing ${data.contributing}
  ## Test 
  To run test enter the following command: 
'''
${data.test}

'''
  #Questions
  If you have any additional questions you can reach me on my Github:${data.Github} or Email:${data.Email}

  `;
  }
  
  module.exports = generateMarkdown;
  