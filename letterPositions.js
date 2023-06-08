// FUNCTION IMPLEMENTATION
const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    const key = sentence[i];

    //ommitting the spaces inbetween the strings
    if (key !== " ") {
      //if the key is not in the object, create an array
      if (!results[key]) {
        results[key] = [];
      }
      //If key is in object, then push the index to the array initially created
      results[key].push(i);
    }
  }

  return results;
};
//Exports the function
module.exports = letterPositions;