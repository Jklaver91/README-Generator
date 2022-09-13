const questions =
    [
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log("Please enter your project's title!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please enter a description of your project (Required)',
            validate: descInput => {
                if (descInput) {
                    return true;
                } else {
                    console.log('Please enter a description for your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'install',
            message: 'Please describe how to install your project. (Required)',
            validate: installInput => {
                if (installInput) {
                    return true;
                } else {
                    console.log('Please describe how to install your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please describe how to use your project. (Required)',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please describe how to use your project!');
                    return false;
                }
            }
        },
        {
            type: 'rawlist',
            name: 'license',
            message: 'Which of the top five licenses would you like to use? (Required)',
            choices: ['MIT', 'GPLv2', 'Apache', 'GPLv3', 'BSD 3-clause', 'None'],
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please describe how to use your project. (Required)',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please describe how to use your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contributer',
            message: 'Please enter who contributed on this project. (Required)',
            validate: contribInput => {
                if (contribInput) {
                    return true;
                } else {
                    console.log('Please enter a contributer! (including yourself!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'testing',
            message: 'Please exlpain explicit methods used for testing. (Required)',
            validate: testInput => {
                if (testInput) {
                    return true;
                } else {
                    console.log('Please enter moethods for testing!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter your github account. (Required)',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your github account!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email to be contacted at! (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter an email!');
                    return false;
                }
            }
        }
    ]

module.exports = questions