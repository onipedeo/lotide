// FUNCTION IMPLEMENTATION
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`😡😡😡 Assertion failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

// returns true if both objects have identical keys with identical values
// otherwise you get back a big fat false!
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

// const shirtObject = { color: "red", size: "medium" };
// const anotherShirtObject = { size: "medium", color: "red" };
// let case1 = eqObjects(shirtObject, anotherShirtObject); //=> true

// const longSleeveShitObject = { size: "medium", color: "red", sleeveLength: "long" };
// let case2 = eqObjects(shirtObject, longSleeveShitObject); //=> flase


// console.log(case1);
// console.log(case2);

// const shirtObject1 = { color: "red", size: "medium" };
// const sameShirtObject = { size: "medium", color: "red" };
// const differentShirtObject = { size: "small", color: "red" };
// const additionalKeyShirtObject = { color: "red", size: "medium", material: "cotton" };
// const emptyObject = {};

// // Identical objects, should return true
// assertEqual(eqObjects(shirtObject1, sameShirtObject), true);

// // Objects with different values, should return false
// assertEqual(eqObjects(shirtObject1, differentShirtObject), false);

// // Objects with an additional key, should return false
// assertEqual(eqObjects(shirtObject1, additionalKeyShirtObject), false);

// // One object is empty, should return false
// assertEqual(eqObjects(shirtObject1, emptyObject), false);

// // Both objects are empty, should return true
// assertEqual(eqObjects(emptyObject, emptyObject), true);

// FUNCTION IMPLEMENTATION


const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
let case3 = eqObjects(multiColorShirtObject, anotherMultiColorShirtObject); // => true

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
let case4 = eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject); // => false

assertEqual((case3), true);
assertEqual((case4), false);

