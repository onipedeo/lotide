const assert = require("chai").assert;
const tail = require(("../tail"));

const newTail = ["Lighthouse", "Hello", "Labs"];
const result = tail(newTail);

describe("#tail", () => {
  it("should return ['Hello', 'Labs'] for [\"Lighthouse\", \"Hello\", \"Labs\"]", () => {
    assert.deepEqual(result, ['Hello', 'Labs']);
  })
});

