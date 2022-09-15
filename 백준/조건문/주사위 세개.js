const fs = require("fs");
const inputData = fs.readFileSync("./input.txt").toString().split(" ");

const a = parseInt(inputData[0]);
const b = parseInt(inputData[1]);
const c = parseInt(inputData[2]);

if (a === b && b === c) {
  console.log(10000 + a * 1000);
} else if (a === b || a === c) {
  console.log(1000 + a * 100);
} else if (b === c) {
  console.log(1000 + b * 100);
} else {
  console.log(Math.max(a, b, c) * 100);
}
