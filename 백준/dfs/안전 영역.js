function dfs(x, y) {
  if (0 <= x && 0 <= y && x < n && y < n) {
    if (canVisit[x][y]) {
      canVisit[x][y] = false;
      safeZoneFlag = true;
      for (let k = 0; k < 4; k++) {
        dfs(x + dx[k], y + dy[k]);
      }
    }
  }
}

function raining(height) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] > height) {
        notRainBoardIndex.push([i, j]);
      } else {
        canVisit[i][j] = false;
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
let board = input.slice(1).map((str) => str.split(" ").map(Number));
let canVisit = Array.from(Array(n), () => new Array(n).fill(true));
let notRainBoardIndex = [];

const dx = [1, -1, 0, 0];
const dy = [0, 0, -1, 1];

let maxSafe = -1;
let safeZoneFlag = false;

for (let i = 1; i < 100; i++) {
  board = input.slice(1).map((str) => str.split(" ").map(Number));
  canVisit = Array.from(Array(n), () => new Array(n).fill(true));
  raining(i);
  let safeZoneCnt = 0;

  notRainBoardIndex.forEach((val, idx) => {
    const [x, y] = val;
    dfs(x, y);
    if (safeZoneFlag) {
      safeZoneCnt++;
      safeZoneFlag = false;
    }
  });
  notRainBoardIndex = [];
  if (safeZoneCnt && maxSafe < safeZoneCnt) {
    maxSafe = safeZoneCnt;
  }
}

if (maxSafe === -1) {
  console.log(1);
} else {
  console.log(maxSafe);
}
