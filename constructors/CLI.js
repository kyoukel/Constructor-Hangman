var inquire = require('inquirer')
var questions = require('../data/questions').questions

var view = {
    print: (msg) => console.log(msg),
    prompt: () => inquire.prompt(questions)
}

module.exports.view = view;