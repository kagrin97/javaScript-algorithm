function dfs(x, y) {
  for (let k = 0; k < 4; k++) {
    let nx = x + dx[k];
    let ny = y + dy[k];
    if (0 <= nx && 0 <= ny && nx < n && ny < m && !pastSet.has(board[nx][ny])) {
      pastSet.add(board[nx][ny]);
      maxDistance = Math.max(maxDistance, pastSet.size);
      dfs(nx, ny);
      pastSet.delete(board[nx][ny]);
    }
  }
}

let input = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input[0].split(" ").map(Number);
let board = input.slice(1).map((str) => str.trim().split(""));

const dx = [0, 0, 1, -1];
const dy = [-1, 1, 0, 0];

let pastSet = new Set(board[0][0]);
let maxDistance = 1;

dfs(0, 0);
console.log(maxDistance);
