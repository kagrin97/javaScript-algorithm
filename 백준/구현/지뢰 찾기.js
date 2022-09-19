const fs = require("fs");
const inputData = fs.readFileSync("./input.txt").toString().split("\n");

const n = +inputData[0];

const board1 = [];
const board2 = [];
const resultBoard = Array.from(Array(n), () => new Array(n).fill("."));

const dx = [-1, 1, 0, 0, -1, -1, 1, 1];
const dy = [0, 0, -1, 1, -1, 1, -1, 1];

let isBoom = false;

const starLocation = [];

for (let i = 1; i < n + 1; i++) {
  board1.push(inputData[i].split(""));
}

for (let i = n + 1; i < n * 2 + 1; i++) {
  board2.push(inputData[i].split(""));
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (board1[i][j] === "*") {
      starLocation.push([i, j]);
    }

    if (board2[i][j] === "x") {
      if (board1[i][j] != "*") {
        let aroundStarCount = 0;
        for (let k = 0; k < 8; k++) {
          nx = dx[k] + i;
          ny = dy[k] + j;
          if (0 <= nx && nx < n && 0 <= ny && ny < n) {
            if (board1[nx][ny] === "*") {
              aroundStarCount += 1;
            }
          }
        }
        resultBoard[i][j] = aroundStarCount;
      } else if (board1[i][j] === "*") {
        isBoom = true;
      }
    }
  }
}

if (isBoom) {
  starLocation.forEach((val) => {
    const [x, y] = val;
    resultBoard[x][y] = "*";
  });
}

resultBoard.forEach((val) => {
  console.log(val.join(""));
});
