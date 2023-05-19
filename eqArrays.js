// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`😡😡😡 Assertion failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (i = 0; i < arr1.length - 1; i++) {
    if (arr1[i] !== arr[i]) {
      return false
    } else {
      return true;
    }
  }
};

const arr = [1, 2, 3];
const array = [3, 2, 1];
assertEqual(eqArrays(arr, array), false);