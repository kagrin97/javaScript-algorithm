let input = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim();

const dp = Array(91).fill(0);

dp[1] = 1;
dp[2] = 1;

for (let i = 3; i < 91; i++) {
  dp[i] = BigInt(dp[i - 1]) + BigInt(dp[i - 2]);
}
console.log(String(dp[+input]));
