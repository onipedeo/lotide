//importing assertArraysEqual and the eqArrays function
const assertArraysEqual = require('../assertArraysEqual');

//Test cases
const arr = [1, 2, 3, 9];
const array = [1, 2, 3, 7];
assertArraysEqual(arr, array);
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 2, 4]);
assertArraysEqual([1, 3, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 'lki'], [1, 2, 3]);
assertArraysEqual([1], [1, 2, 3]);