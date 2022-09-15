const fs = require("fs");
const inputData = fs.readFileSync("./input.txt").toString().split("\n");

const t = +inputData[0];

for (let i = 1; i < t * 2 + 1; i = i + 2) {
  const a = inputData[i + 1].split(" ").map((val) => +val);
  console.log(Math.min(...a) + " " + Math.max(...a));
}
