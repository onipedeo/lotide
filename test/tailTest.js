const assertEqual = require("../assertEqual");
const tail = require("../tail");



// TEST CODE
const newTail = ["Lighthouse", "Hello", "Labs"];
let result = tail(newTail);

assertEqual((result.length), 2);
assertEqual((result[0]), "Hello");