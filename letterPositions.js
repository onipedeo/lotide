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


const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    const key = sentence[i];

    //ommitting the spaces inbetween the strings
    if (key !== " ") {
      //if the key is not in the object, create an array
      if (!results[key]) {
        results[key] = [];
      }
      //If key is in object, then push the index to the array initially created
      results[key].push(i);
    }
  }

  return results;
};

//Test case
const result = letterPositions("lighthouse in the house");
console.log(result);
const testCase1 = letterPositions("happy haapy home").a;
const testCase2 = letterPositions("anime name is naruto shipuddeen")['e'];
console.log(testCase2);

assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(testCase1, [1, 7, 8]);
assertArraysEqual(testCase2, [4, 9, 28, 29]);


