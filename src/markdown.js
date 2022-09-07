class markDown {
    static generateReadme(answers) {
        return `
# ${answers.title}

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
    ${answers.email}
    `
    }
}

module.exports = markDown