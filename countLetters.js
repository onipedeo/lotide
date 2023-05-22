// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`😡😡😡 Assertion failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

const countLetters = function(str) {
  let result = {};
  for (const letters of str) {
    console.log(letters);
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

assertEqual(nameOne, 2);