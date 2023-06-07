const assertEqual = require("./assertEqual");

// FUNCTION IMPLEMENTATION

const tail = function(arr) {
  // let result;
  let slice = arr.slice(1);
  console.log("the slice ", slice);

  return slice;
};

module.exports = tail;