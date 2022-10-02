const line = require("fs").readFileSync("./input.txt", "utf8");
let inputData = line.trim().split("\n");

let blueArr = inputData[1].split("R").filter((val) => val != "");
let redArr = inputData[1].split("B").filter((val) => val != "");

if (blueArr.length === 1 && redArr.length === 1) {
  console.log(2);
  process.exit(0);
}

let result = 0;
if (blueArr.length > redArr.length) {
  result += redArr.length + 1;
} else {
  result += blueArr.length + 1;
}
console.log(result);
