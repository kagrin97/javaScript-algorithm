function testBoard(idx) {
  let bingo = 0;

  //가로검사
  checkBoard.forEach((val) => {
    const rowCount = val.reduce((pre, cur) => {
      return pre + cur;
    });
    if (rowCount === 5) {
      bingo += 1;
    }
  });

  //세로검사
  for (let j = 0; j < 5; j++) {
    const columnCount =
      checkBoard[0][j] +
      checkBoard[1][j] +
      checkBoard[2][j] +
      checkBoard[3][j] +
      checkBoard[4][j];
    if (columnCount === 5) {
      bingo += 1;
    }
  }

  //왼쪽 대각선
  const leftCount =
    checkBoard[0][0] +
    checkBoard[1][1] +
    checkBoard[2][2] +
    checkBoard[3][3] +
    checkBoard[4][4];
  if (leftCount === 5) {
    bingo += 1;
  }

  // 오른쪽 대각선
  const rightCount =
    checkBoard[0][4] +
    checkBoard[1][3] +
    checkBoard[2][2] +
    checkBoard[3][1] +
    checkBoard[4][0];
  if (rightCount === 5) {
    bingo += 1;
  }

  if (bingo >= 3) {
    console.log(idx + 1);
    process.exit();
  }
}

const fs = require("fs");
const inputData = fs.readFileSync("./input.txt").toString().split("\n");

const board = [];
for (let i = 0; i < 5; i++) {
  const tmp = inputData[i].split(" ").map((val) => +val);
  board.push(tmp);
}

const boardLocation = {};
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    boardLocation[board[i][j]] = [i, j];
  }
}

const mcPick = [];
for (let i = 5; i < 10; i++) {
  const tmp = inputData[i].split(" ").map((val) => +val);
  mcPick.push(...tmp);
}

let checkBoard = Array.from(Array(5), () => new Array(5).fill(0));

mcPick.forEach((val, idx) => {
  const [x, y] = boardLocation[val];
  checkBoard[x][y] = 1;
  testBoard(idx);
});
