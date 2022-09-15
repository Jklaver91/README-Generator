class markDown {
    static generateReadme(answers) {
        return `
# ${answers.title}

![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)<br />

## Table of Contents

- [Description](#description)
- [Install](#install)
- [Usage](#usage)
- [License](#license)
- [Contributers](#contributers)
- [Testing](#testing)
- [Contact](#contact)

## Description
    ${answers.description}

## Install
    ${answers.install}

## Usage
    ${answers.usage}

## License
    ${answers.license}

## Contributers
    ${answers.contributer}

## Testing
    ${answers.testing}

## Contact
    
    You can contact me at:
    
    Github: https://github.com/${answers.github}
    
    Or at ${answers.email}
    `
    }
}

module.exports = markDown