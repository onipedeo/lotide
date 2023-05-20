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

const flatten = (array) => {
  let flattened = [];
  for (const element of array) {
    if (Array.isArray(element)) {
      for (const innerElement of element) {
        flattened.push(innerElement);
      }
    } else {
      flattened.push(element);
    }
  }
  return flattened;
};

const arrayToTest = [1, 2, 3, [4, 5, 6], 7, 8, 9];

console.log(flatten(arrayToTest));

assertArraysEqual(flatten(arrayToTest), [1, 2, 3, 4, 5, 6, 7, 8, 9]);