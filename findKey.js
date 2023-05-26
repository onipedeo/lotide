// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`😡😡😡 Assertion failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

const findKey = function(object, callBack) {
  if (Object.keys(object).length === 0) {
    return undefined;
  };

  for (const item in object) {
    if (callBack(object[item])) {
      return item;
    }
  }
};

const result1 = (findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2));

const result2 = (findKey({}, x => x.stars === 2));

assertEqual(result1, 'noma');
assertEqual(result2, undefined);