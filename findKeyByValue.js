// FUNCTION IMPLEMENTATION
const findKeyByValue = function(obj, value) {
  let firstKey = undefined;
  for (const elements in obj) {
    // console.log(elements);
    if (obj[elements] === value) {
      firstKey = elements;
    }
  }
  return firstKey;
};

//Exporting the function
module.exports = findKeyByValue;