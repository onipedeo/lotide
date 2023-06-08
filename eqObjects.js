//Import needed modules
const eqArrays = require("./eqArrays");

// FUNCTION IMPLEMENTATION
const eqObjects = function(object1, object2) {
  let result = true;
  const arr1 = Object.keys(object1);
  const arr2 = Object.keys(object2);

  if (arr1.length === arr2.length) {
    for (const elements of arr1) {
      if (Array.isArray(object1[elements]) || Array.isArray(object2[elements])) {
        result = eqArrays(object1[elements], object2[elements]);
      } else if (object1[elements] !== object2[elements]) {
        return false;
      }
    }
  } else {
    return false;
  }
  return result;
};
//Exporting the function
module.exports = eqObjects;