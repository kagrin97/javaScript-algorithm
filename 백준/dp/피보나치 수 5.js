const input = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim();

let dp = Array(21).fill(0);

dp[1] = 1;

for (let i = 2; i < +input + 1; i++) {
  dp[i] = dp[i - 1] + dp[i - 2];
}

console.log(dp[input]);
