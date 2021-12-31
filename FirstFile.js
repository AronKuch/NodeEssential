const path = require("path");

const grab = (flag) => {
  return process.argv[process.argv.indexOf(flag) + 1];
};

let name = "Aron";
let audience = "World";

console.log(`Hello ${audience}! It's ${name}`);
console.log(`The file name is ${path.basename(__filename)}`);
console.log(`I'm running Node version ${process.versions.node}`);
console.log(`Here's the user argument ${grab("--user")}`);
