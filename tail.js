const assertEqual = require("./assertEqual");

// FUNCTION IMPLEMENTATION

const tail = function(arr) {
  // let result;
  let slice = arr.slice(1);

  return slice;
};

module.exports = tail;