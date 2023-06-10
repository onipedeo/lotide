//import needed module
const assertEqual = require("./assertEqual");
// FUNCTION IMPLEMENTATION
const countLetters = function(str) {
  let result = {};
  for (const letters of str) {
    if (result[letters]) {
      result[letters] += 1;
    } else {
      result[letters] = 1;
    }
  }
  return result;
};
const nameOne = countLetters("oluwatobi");
console.log(nameOne);
const example = countLetters("lighthouse in the house");
console.log(example);

assertEqual(nameOne['o'], 2);
assertEqual(example.h, 4);

module.exports = countLetters;