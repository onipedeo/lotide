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

const map = function(array, callback) {
  const results = []; //initiatlising the output array

  for (let item of array) {
    results.push(callback(item));
  }

  return results;
};

const words = ["ground", "control", "to", "major", "tom"];
const result1 = map(words, word => word[0]);
// console.log(result1);

assertArraysEqual(result1, ['g', 'c', 't', 'm', 't']);

const animals = ['dogs', 'rabbit', 'cat', 'fish', 'elephant'];
const result2 = map(animals, (animal) => `The animal is ${animal}`);
// console.log(result2);

assertArraysEqual(result2, [
  'The animal is dogs',
  'The animal is rabbit',
  'The animal is cat',
  'The animal is fish',
  'The animal is elephant'
]
);

const games = ['fifa 2023', 'GOW', 'MK11', 'Ratchet and Clank'];
const result3 = map(games, (game) => `${game}eylay`);

assertArraysEqual(result3, ['fifa 2023eylay', 'GOWeylay', 'MK11eylay', 'Ratchet and Clankeylay']);