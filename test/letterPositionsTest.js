//importing needed modules
const assert = require("chai").assert;
const letterPositions = require("../letterPositions");

//Test case
const testCase1 = letterPositions("happy haapy home").a;
const testCase2 = letterPositions("anime name is naruto shipuddeen")['e'];

describe("#letterPositions", () => {
  it("should return [1] for letterPositions(\"hello\").e", () => {
    assert.deepEqual(letterPositions("hello").e, [1]);
  });

  it("should return [1, 7, 8] for (testCase1, [1, 7, 8])", () => {
    assert.deepEqual(testCase1, [1, 7, 8]);
  });
  it("should return [4, 9, 28, 29] for (testCase2, [4, 9, 28, 29])", () => {
    assert.deepEqual(testCase2, [4, 9, 28, 29]);
  });
});