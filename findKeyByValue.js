// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`😡😡😡 Assertion failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

const findKeyByValue = function(obj, value) {
  let firstKey = undefined;
  for (const elements in obj) {
    // console.log(elements);
    if (obj[elements] === value) {
      firstKey = elements;
    }
  }
  return firstKey;
};

let myObj = {
  name: "Tobi",
  class: "winner",
  age: 7,
  hobby: "gaming",
  favCar: "sportage"
};
const val = 'sportage';

console.log(findKeyByValue(myObj, val));

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);