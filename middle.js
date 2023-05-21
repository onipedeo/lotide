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

const words = ["hello", "world", "lighthouse"];
const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numName = [1, 2, 3, 4, "grace", "Bello", 5, 6, 7, 8, 10, 11];

assertArraysEqual(middle(words), ["world"]);
assertArraysEqual(middle(numbers1), [6]);
assertArraysEqual(middle(num), [5, 6]);
assertArraysEqual(middle(numName), ["Bello", 5]);

assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);