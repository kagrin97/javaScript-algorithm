const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const [R, C] = input[0].split(" ").map(Number);
const board = input.slice(1).map((i) => i.split(""));

const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

const lostIslandIndex = [];

for (let i = 0; i < R; i++) {
  for (let j = 0; j < C; j++) {
    if (board[i][j] === "X") {
      let islandCnt = 0;
      for (let k = 0; k < 4; k++) {
        let nx = i + dx[k];
        let ny = j + dy[k];

        if (nx < 0 || ny < 0 || nx >= R || ny >= C) continue;
        if (board[nx][ny] === "X") islandCnt++;
      }
      if (islandCnt <= 1) lostIslandIndex.push([i, j]);
    }
  }
}

for (let index of lostIslandIndex) {
  const [x, y] = index;
  board[x][y] = ".";
}

const islandIndex = [];

for (let i = 0; i < R; i++) {
  for (let j = 0; j < C; j++) {
    if (board[i][j] === "X") islandIndex.push([i, j]);
  }
}

islandIndex.sort((a, b) => a[0] - b[0]);
const startX = islandIndex[0][0];
const endX = islandIndex[islandIndex.length - 1][0];

islandIndex.sort((a, b) => a[1] - b[1]);
const startY = islandIndex[0][1];
const endY = islandIndex[islandIndex.length - 1][1];

const newBoard = board
  .slice(startX, endX + 1)
  .map((b) => b.slice(startY, endY + 1));

newBoard.forEach((b) => console.log(b.join("")));
