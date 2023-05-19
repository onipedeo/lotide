// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`😡😡😡 Assertion failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};
const eqArrays = function(arr1, arr2) {
  let result = false;
  for (let i = 0; i <= arr1.length - 1; i++) {
    for (let j = 0; j <= arr2.length - 1; j++) {
      if (arr1[i] === arr2[j]) {
        // console.log(arr1[i], arr2[j]);
        result = true;
      } else {
        result = false;
      }
    }
  }

  return result;
};

const arr = [1, 2, 3];
const array = [3, 2, 1];
assertEqual(eqArrays(arr, array), false);