//Importing the needed modules
const eqObjects = require("./eqObjects");

// Function Implementation
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`The two objects are the same: ${inspect(actual)} === ${inspect(expected)}.`);
  } else {
    console.log(`The two objects are not the same: ${inspect(actual)} !== ${inspect(expected)}.`);
  }
};

module.exports = assertObjectsEqual;