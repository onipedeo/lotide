const head = require("../head");
const assertEqual = require("../assertEqual");


// TEST HEAD CODE WITH ASSERTEQUAL
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), 2);
assertEqual(head([0]), 0);