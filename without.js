// FUNCTION IMPLEMENTATION
const assertArraysEqual = require("./assertArraysEqual");

const without = function(source, itemsToRemove) {
  const result = [];
  for (let i = 0; i < source.length; i++) {
    let shouldRemove = false;
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        shouldRemove = true;
        break;
      }
    }
    if (!shouldRemove) {
      result.push(source[i]);
    }
  }
  return result;
};

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function

assertArraysEqual(words, without(words, ["lighthouse"]));

module.exports = without;