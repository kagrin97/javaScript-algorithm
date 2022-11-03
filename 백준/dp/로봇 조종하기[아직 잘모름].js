let input = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input[0].split(" ").map(Number);
const board = input.slice(1).map((str) => str.split(" ").map(Number));

const dp = Array.from(Array(n), () => Array(m).fill(-1000000000));
const left = Array.from(Array(n), () => Array(m).fill(-1000000000));
const right = Array.from(Array(n), () => Array(m).fill(-1000000000));

dp[0][0] = board[0][0];

// 맨위 값들을 오른쪽으로 이동하면서 더해줌
for (let j = 1; j < m; j++) {
  dp[0][j] = dp[0][j - 1] + board[0][j];
}

for (let i = 1; i < n; i++) {
  // 맨왼쪽 값들은 위에서만 더해줌
  left[i][0] = dp[i - 1][0] + board[i][0];
  for (let j = 1; j < m; j++) {
    left[i][j] = Math.max(
      dp[i - 1][j] + board[i][j],
      left[i][j - 1] + board[i][j]
    );
  }

  // 맨오르쪽 값들은 위에서만 더해줌
  right[i][m - 1] = dp[i - 1][m - 1] + board[i][m - 1];
  for (let j = m - 2; j >= 0; j--) {
    right[i][j] = Math.max(
      dp[i - 1][j] + board[i][j],
      right[i][j + 1] + board[i][j]
    );
  }

  for (let j = 0; j < m; j++) {
    dp[i][j] = Math.max(right[i][j], left[i][j]);
  }
}

console.log(dp[n - 1][m - 1]);
