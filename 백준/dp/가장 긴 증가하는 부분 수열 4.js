let input = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input[0];
const arr = input[1].split(" ").map(Number);

const dp = Array(n).fill(1);
let maxVal = 1;
let maxIdx = 1;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < i; j++) {
    if (arr[i] > arr[j]) {
      dp[i] = Math.max(dp[i], dp[j] + 1);
      if (dp[i] > maxVal) {
        maxVal = dp[i];
        maxIdx = i;
      }
    }
  }
}

console.log(maxVal);

if (arr[maxIdx] === undefined) {
  console.log(...arr);
  process.exit(0);
}

let a = 1;
let result = [arr[maxIdx]];

for (let i = maxIdx - 1; i >= 0; i--) {
  if (dp[i] + a === maxVal) {
    result.unshift(arr[i]);
    a++;
  }
}

console.log(...result);
