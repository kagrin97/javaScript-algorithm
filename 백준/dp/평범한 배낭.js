let input = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, k] = input[0].split(" ").map(Number);

const product = input.slice(1).map((val) => val.split(" ").map(Number));

const dp = Array.from(Array(n + 1), () => Array(k + 1).fill(0));

for (let i = 1; i < n + 1; i++) {
  for (let j = 1; j < k + 1; j++) {
    const [w, v] = product[i - 1];

    if (j < w) {
      dp[i][j] = dp[i - 1][j];
    } else {
      dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - w] + v);
    }
  }
}

console.log(dp[n][k]);
