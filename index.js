let message = "Hello Rahul!";
let greeting = require("../greeting/index.js");

module.exports = `${message} ${greeting}`;
console.log(`${message} ${greeting}`);
