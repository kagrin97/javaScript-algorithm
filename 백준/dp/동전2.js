let input = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, k] = input[0].split(" ").map(Number);

const coinArr = input.slice(1).map((val) => +val.trim());

const dp = Array(k + 1).fill(10001);
dp[0] = 0;

for (let i of coinArr) {
  for (let j = i; j < k + 1; j++) {
    dp[j] = Math.min(dp[j], dp[j - i] + 1);
  }
}

if (dp[k] === 10001) {
  console.log(-1);
} else {
  console.log(dp[k]);
}
