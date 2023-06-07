const eqArrays = require("../eqArrays");
const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle");


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