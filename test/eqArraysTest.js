//Importing the needed modules
const eqArrays = require("../eqArrays");
const assert = require("chai").assert;

//Test Code
const arr = [1, 2, 3];
const array = [1, 2, 3, 7];

describe("#eqArray", () => {
  it("should return true for [1, 2, 3], [1, 2, 3]", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });

  it("should return false for [1, 2, 3], [1, 4, 3]", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 4, 3]), false);
  });

  it("should return false for [1], [1, 4, \"3\"]", () => {
    assert.deepEqual(eqArrays([1], [1, 4, "3"]), false);
  });
  it("should return true for (arr, array)", () => {
    assert.deepEqual(eqArrays(arr, array), false);
  });
});