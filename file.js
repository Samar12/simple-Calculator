const OpFile = require("./operations/index");
const valid = require("./operations/validator");
const params = process.argv.slice(2);

const operationIndex = params.findIndex(item => item.startsWith("--"));

const operation = params.splice(operationIndex, 1).map(e => e.substring(2))[0];

const operands = params.map(e => Number(e));

operands.map(valid);

let myFunction = OpFile[operation];

console.log(myFunction(...operands));
