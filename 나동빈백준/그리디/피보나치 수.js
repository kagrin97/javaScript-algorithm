const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);

const dp = Array.from({ length: 47 }, () => 0);
dp[1] = 1;
dp[2] = 1;

for (let i = 3; i < N + 1; i++) {
  dp[i] = dp[i - 1] + dp[i - 2];
}
console.log(dp[N]);
