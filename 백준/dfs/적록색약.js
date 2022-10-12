// 일반인
function dfsNormal(x, y) {
  if (!visitedNormal[x][y]) {
    visitedNormal[x][y] = true;
    for (let k = 0; k < 4; k++) {
      let nx = x + dx[k];
      let ny = y + dy[k];
      if (0 <= nx && 0 <= ny && nx < n && ny < n) {
        if (board[x][y] === board[nx][ny]) {
          dfsNormal(nx, ny);
        }
      }
    }
  }
}

// 적록색약
function dfs(x, y) {
  if (!visited[x][y]) {
    visited[x][y] = true;
    for (let k = 0; k < 4; k++) {
      let nx = x + dx[k];
      let ny = y + dy[k];
      if (0 <= nx && 0 <= ny && nx < n && ny < n) {
        if (board[x][y] === board[nx][ny]) {
          dfs(nx, ny);
        } else if (
          (board[x][y] === "R" && board[nx][ny] === "G") ||
          (board[x][y] === "G" && board[nx][ny] === "R")
        ) {
          dfs(nx, ny);
        }
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
const board = input.slice(1).map((str) => str.trim().split(""));
let visitedNormal = Array.from(Array(n), () => new Array(n).fill(false));
let visited = Array.from(Array(n), () => new Array(n).fill(false));

const dx = [1, -1, 0, 0];
const dy = [0, 0, -1, 1];

let normalCnt = 0;
let cnt = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    // 일반일 검사
    if (!visitedNormal[i][j]) {
      dfsNormal(i, j);
      normalCnt++;
    }
    // 적록색약 검사
    if (!visited[i][j]) {
      dfs(i, j);
      cnt++;
    }
  }
}
console.log(normalCnt, cnt);
