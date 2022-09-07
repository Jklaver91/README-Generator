class markDown {
    static generateReadme(answers){
        return `
# $(answers.title)

## Table of Contents

- [Description](#description)
- [Install](#install)
- [Usage](#usage)
- [License](#license)
- [Contributers](#contributers)
- [Testing](#testing)
- [Contact](#contact)

## Description
    $(answers.description)

## Install
    $(answers.install)

## Usage
    $(answers.usage)

## License
    $(answers.license)

## Contributers
    $(answers.contributers)

## Testing
    $(answers.testing)

## Contact
    $(answers.contact)
    `
    }
}

module.exports = markDown