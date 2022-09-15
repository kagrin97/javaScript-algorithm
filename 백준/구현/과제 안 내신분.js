const fs = require("fs");
const inputData = fs.readFileSync("./input.txt").toString().split("\n");

let arr = new Array(30).fill(0).map((val, i) => (val = i + 1));

inputData.forEach((val) => {
  arr = arr.filter((v) => v != val);
});

arr.forEach((val) => {
  console.log(val);
});
