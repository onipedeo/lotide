// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`😡😡😡 Assertion failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

// returns true if both objects have identical keys with identical values
// otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {

};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
let case1 = eqObjects(shirtObject, anotherShirtObject); //=> true

const longSleeveShitObject = { size: "medium", color: "red", sleeveLength: "long" };
let case2 = eqObjects(shirtObject, longSleeveShitObject); //=> true


console.log(case1);
console.log(case2);