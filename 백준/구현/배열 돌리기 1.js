const line = require("fs").readFileSync("./input.txt", "utf8");
const inputData = line.trim().split("\n");

const [n, m, r] = inputData[0].split(" ").map((val) => +val);
const board = [];

for (let i = 1; i < n + 1; i++) {
  board.push(inputData[i].split(" ").map((val) => +val));
}

const spinCnt = Math.min(n, m) / 2;

for (let a = 0; a < r; a++) {
  for (let i = 0; i < spinCnt; i++) {
    const saveNum = board[i][i];
    const row = n - i - 1;
    const col = m - i - 1;

    //상단
    for (let j = i; j < col; j++) {
      board[i][j] = board[i][j + 1];
    }

    //오른쪽
    for (let j = i; j < row; j++) {
      board[j][col] = board[j + 1][col];
    }

    //하단
    for (let j = col; j > i; j--) {
      board[row][j] = board[row][j - 1];
    }

    //왼쪽
    for (let j = row; j > i; j--) {
      board[j][i] = board[j - 1][i];
    }

    board[i + 1][i] = saveNum;
  }
}
board.forEach((val) => {
  console.log(...val);
});
