function dfs(x, y) {
  if (dp[x][y] === -1) {
    dp[x][y] = 0;
    for (let k = 0; k < 4; k++) {
      let nx = x + dx[k];
      let ny = y + dy[k];
      if (0 <= nx && 0 <= ny && nx < n && ny < n) {
        if (board[nx][ny] > board[x][y]) {
          dp[x][y] = Math.max(dp[x][y], dfs(nx, ny));
        }
      }
    }
  }
  return dp[x][y] + 1;
}

let input = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input[0];
const board = input.slice(1).map((str) => str.split(" ").map(Number));

const dp = Array.from(Array(n), () => Array(n).fill(-1));
let maxVal = 1;

const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    maxVal = Math.max(maxVal, dfs(i, j));
  }
}

console.log(maxVal);
