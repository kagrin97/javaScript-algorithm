const line = require("fs").readFileSync("./input.txt", "utf8");
const inputData = line.trim().split("\n");

const [n, k] = inputData[0].split(" ").map((val) => +val);

let s = inputData[1].split(" ").map((val) => +val);
let d = inputData[2].split(" ").map((val) => +val);

let tmp = Array(n).fill(0);

for (let i = 0; i < k; i++) {
  for (let j = 0; j < n; j++) {
    tmp[d[j] - 1] = s[j];
  }
  s = tmp;
  tmp = Array(n).fill(0);
}
console.log(...s);
