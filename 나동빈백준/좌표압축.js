const input = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]);
let arr = input[1].split(" ").map(Number);

let copyArr = [...new Set(arr)];
copyArr.sort((a, b) => a - b);

let myMay = new Map();

copyArr.forEach((val, index) => {
  myMay.set(val, index);
});

let result = "";

for (x of arr) {
  result += myMay.get(x) + " ";
}

console.log(result);
