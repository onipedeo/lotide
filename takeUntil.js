//imporating needed module
const assertArraysEqual = require("./assertArraysEqual");

// FUNCTION IMPLEMENTATION
const takeUntil = function(array, callBack) {
  const result = [];
  for (const item of array) {
    if (!callBack(item)) {
      result.push(item); //pushes all items that returns false after calling the callBack function to the result array

    } else {
      return result;// returns the result once the callback func becomes false.
    }
  }
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
assertArraysEqual(results2, ["I've", 'been', 'to', 'Hollywood']);

module.exports = takeUntil;