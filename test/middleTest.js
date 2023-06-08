//importing the needed modules(chai and middle)
const assert = require("chai").assert;
const middle = require("../middle");

//Test Code
describe("#middle", () => {
  it("should return [\"world\"] for [\"hello\", \"world\", \"lighthouse\"]", () => {
    assert.deepEqual(middle(["hello", "world", "lighthouse"]), ["world"]);
  });

  it("should return [6] for [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]), [6]);
  });

  it("should return [5, 6] for [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [5, 6]);
  });

  it("should return [5, 6] for [1, 2, 3, 4, \"grace\", \"Bello\", 5, 6, 7, 8, 10, 11]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, "grace", "Bello", 5, 6, 7, 8, 10, 11]), ["Bello", 5]);
  });

  it("should return [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("should return [3] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

});