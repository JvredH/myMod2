const helloMessage = "Greetings! Let us begin!";
const goodByeMessage ='GoodBye';



// different ways to export:

module.exports = helloMessage; // most common syntax

module.exports = { helloMessage, goodByeMessage } // most common syntax, this generally used to export more than 1 thing

module.exports.helloMessage = helloMessage
                // can create a new key for the .helloMessage part
module.exports = sayMessage

console.log(module) // to check the actual module

exports.helloMessage = helloMessage;


// when importing its important to keep the same syntax of the export
