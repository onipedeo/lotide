const assertObjectsEqual = require("../assertObjectsEqual");


const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };

assertObjectsEqual(multiColorShirtObject, anotherMultiColorShirtObject);