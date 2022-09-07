const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./src/questions')
const markDown = require('./src/markdown')



const promptUser = () => {
  return inquirer.prompt(questions)
    .then(answers => {
      const readME = markDown.generateReadme(answers)
      fs.writeFile('./dist/README.md', readME, err => {
        if (err) {
          console.log("There has been an error!");
          console.log(err);
        }
        else console.log("Your new README.md is in the dist folder!");
      })
    })
};

promptUser();