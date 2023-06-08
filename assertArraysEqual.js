//Importing the needed module
const eqArrays = require("./eqArrays");

// FUNCTION IMPLEMENTATION
const assertArraysEqual = function(arr3, arr4) {
  if (eqArrays(arr3, arr4)) {
    console.log(`The two arrays are the same: ${arr3} === ${arr4}.`);
  } else {
    console.log(`The two arrays are not the same: ${arr3} !== ${arr4}.`);
  }
};

//Eporting the function
module.exports = assertArraysEqual;