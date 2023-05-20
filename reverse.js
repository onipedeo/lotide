'use strict';

let args = process.argv;
// console.log(args);
for (let i = 2; i <= args.length - 1; i++) {
  let result = "";
  for (let j = args[i].length - 1; j >= 0; j--) {

    result = result + args[i][j];

  }
  console.log(result);
}
