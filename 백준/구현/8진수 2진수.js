const fs = require("fs");
const inputData = fs.readFileSync("./input.txt").toString();

const a = parseInt(inputData, 8).toString(2);

if (isNaN(a) === true) {
  console.log(0);
} else {
  console.log(a);
}
