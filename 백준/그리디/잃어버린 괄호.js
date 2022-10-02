const line = require("fs").readFileSync("./input.txt", "utf8");
let inputData = line.trim().split("-");

inputData = inputData.map((val) => {
  if (val.includes("+")) {
    const arr = val.split("+").map(Number);
    return arr.reduce((pre, cur) => pre + cur);
  }
  return +val;
});

let result = 0;

inputData.forEach((val, idx) => {
  if (idx === 0) {
    result = val;
  } else {
    result -= val;
  }
});
console.log(result);
