const assertEqual = require("../assertEqual");
const eqArrays = require("../eqArrays");


const arr = [1, 2, 3];
const array = [1, 2, 3, 7];
assertEqual(eqArrays(arr, array), false);

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 4, 3]), false);
assertEqual(eqArrays([1], [1, 4, "3"]), false);