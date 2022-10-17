let input = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, k] = input[0].split(" ").map(Number);

const coinArr = input.slice(1).map((val) => +val.trim());

const dp = Array(k + 1).fill(0);
dp[0] = 1;

for (let i of coinArr) {
  for (let j = 1; j < k + 1; j++) {
    if (j - i >= 0) {
      dp[j] += dp[j - i];
    }
  }
}
console.log(dp[k]);
