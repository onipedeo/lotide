const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");

const middle = (array) => {
  let middleElement = [];

  if (array.length === 1 || array.length === 2) {
    return middleElement;
  } else if (array.length % 2 === 0) {
    middleElement.push(array[Math.floor((array.length / 2) - 1)], array[Math.floor(array.length / 2)]);
  } else {
    middleElement.push(array[Math.floor(array.length / 2)]);
  }
  return middleElement;
};

module.exports = middle;

