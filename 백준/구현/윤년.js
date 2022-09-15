const fs = require("fs");
const inputData = fs.readFileSync("./input.txt").toString();

if (inputData % 4 === 0) {
  if (inputData % 100 === 0) {
    if (inputData % 400 === 0) {
      console.log(1);
      process.exit();
    } else {
      console.log(0);
      process.exit();
    }
  } else {
    console.log(1);
    process.exit();
  }
}
console.log(0);
