// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`😡😡😡 Assertion failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

// My solution which converts the array into a string using JSON stringify and then comparing the arrays as a string.
// const tail = function (arr) {
//   // let result;
//   let slice = arr.slice(1);
//   // console.log("the slice ", slice);

//   return JSON.stringify(slice);
// };

// // TEST CODE
// const newTail = ["Lighthouse", "Hello", "Labs"];

// assertEqual(tail(newTail), JSON.stringify(["Hello", "Labs"]));


// Recommended solution which compares the array in terms of length and comparing the individual elements of the array by their index.
const tail = function(arr) {
  // let result;
  let slice = arr.slice(1);
  console.log("the slice ", slice);

  return slice;
};

// TEST CODE
const newTail = ["Lighthouse", "Hello", "Labs"];
let result = tail(newTail);

assertEqual((result.length), 2);
assertEqual((result[0]), "Hello");