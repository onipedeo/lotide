//Import needed modules
const eqObjects = require("../eqObjects");
const assert = require("chai").assert;

//Test Code
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
const case3 = eqObjects(multiColorShirtObject, anotherMultiColorShirtObject); // => true

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
const case4 = eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject); // => false

describe("#eqObject", () => {
  it("should return true for case 3", () => {
    assert.deepEqual((case3), true);
  });
  it("should return false for case 4", () => {
    assert.deepEqual((case4), false);
  });

});