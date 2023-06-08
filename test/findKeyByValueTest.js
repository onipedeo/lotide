//importing the needed modules
const assert = require("chai").assert;
const findKeyByValue = require("../findKeyByValue");

//Test Code
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

describe("#findKeyByValue", () => {
  it("should return drama for (bestTVShowsByGenre, \"The Wire\") ", () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });

  it("should return undefined for (bestTVShowsByGenre, \"That '70s Show\") ", () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });
});