const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

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
  let result = true;
  const arr1 = Object.keys(object1);
  const arr2 = Object.keys(object2);


  if (arr1.length === arr2.length) {
    for (const elements of arr1) {
      if (Array.isArray(object1[elements]) || Array.isArray(object2[elements])) {
        result = eqArrays(object1[elements], object2[elements]);
      } else if (object1[elements] !== object2[elements]) {
        return false;
      }
    }

  } else {
    return false;
  }

  return result;

};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`The two objects are the same: ${inspect(actual)} === ${inspect(expected)}.`);
  } else {
    console.log(`The two objects are not the same: ${inspect(actual)} !== ${inspect(expected)}.`);
  }
};

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };

assertObjectsEqual(multiColorShirtObject, anotherMultiColorShirtObject);