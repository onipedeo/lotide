//importing the needed module
const assertArraysEqual = require("./assertArraysEqual");

// Function Implementation
const flatten = (array) => {
  let flattened = [];
  for (const element of array) {
    if (Array.isArray(element)) {
      for (const innerElement of element) {
        flattened.push(innerElement);
      }
    } else {
      flattened.push(element);
    }
  }
  return flattened;
};

const arrayToTest = [1, 2, 3, [4, 5, 6], 7, 8, 9];

console.log(flatten(arrayToTest));

assertArraysEqual(flatten(arrayToTest), [1, 2, 3, 4, 5, 6, 7, 8, 9]);

module.exports = flatten;