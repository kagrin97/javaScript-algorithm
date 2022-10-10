function dfs(x, y) {
  if (0 <= x && 0 <= y && x < n && y < n) {
    if (!visited[x][y] && board[x][y]) {
      apartCnt++;
      visited[x][y] = true;
      for (let k = 0; k < 4; k++) {
        dfs(x + dx[k], y + dy[k]);
      }
    }
  }
}

let input = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input[0];
const board = input.slice(1).map((str) => str.trim().split("").map(Number));
let visited = Array.from(Array(n), () => new Array(n).fill(false));

const dx = [1, -1, 0, 0];
const dy = [0, 0, -1, 1];

const apartArr = [];
let apartCnt = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (board[i][j] === 1 && !visited[i][j]) {
      dfs(i, j);
      apartArr.push(apartCnt);
      apartCnt = 0;
    }
  }
}
apartArr.sort((a, b) => a - b);
console.log(apartArr.length);
apartArr.forEach((val) => console.log(val));
