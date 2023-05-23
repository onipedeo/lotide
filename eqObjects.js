// FUNCTION IMPLEMENTATION
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
      if (object1[elements] !== object2[elements]) {
        return false;
      }
    }

  } else {
    return false;
  }

  return result;

};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
let case1 = eqObjects(shirtObject, anotherShirtObject); //=> true

const longSleeveShitObject = { size: "medium", color: "red", sleeveLength: "long" };
let case2 = eqObjects(shirtObject, longSleeveShitObject); //=> flase


console.log(case1);
console.log(case2);

const shirtObject1 = { color: "red", size: "medium" };
const sameShirtObject = { size: "medium", color: "red" };
const differentShirtObject = { size: "small", color: "red" };
const additionalKeyShirtObject = { color: "red", size: "medium", material: "cotton" };
const emptyObject = {};

// Identical objects, should return true
assertEqual(eqObjects(shirtObject1, sameShirtObject), true);

// Objects with different values, should return false
assertEqual(eqObjects(shirtObject1, differentShirtObject), false);

// Objects with an additional key, should return false
assertEqual(eqObjects(shirtObject1, additionalKeyShirtObject), false);

// One object is empty, should return false
assertEqual(eqObjects(shirtObject1, emptyObject), false);

// Both objects are empty, should return true
assertEqual(eqObjects(emptyObject, emptyObject), true);