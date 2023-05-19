// FUNCTION IMPLEMENTATION
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

const assertArraysEqual = function(arr3, arr4) {
  if (eqArrays(arr3, arr4)) {
    console.log(`The two arrays are the same: ${arr3} === ${arr4}.`);
  } else {
    console.log(`The two arrays are not the same: ${arr3} !== ${arr4}.`);
  }
};
const arr = [1, 2, 3, 9];
const array = [1, 2, 3, 7];
assertArraysEqual(arr, array);