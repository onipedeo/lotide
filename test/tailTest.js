//Importing the needed Modules(chai and tail)
const assert = require("chai").assert;
const tail = require(("../tail"));

//Test Code
const newTail = ["Lighthouse", "Hello", "Labs"];
const result = tail(newTail);

describe("#tail", () => {
  it("should return ['Hello', 'Labs'] for [\"Lighthouse\", \"Hello\", \"Labs\"]", () => {
    assert.deepEqual(result, ['Hello', 'Labs']);
  });
});