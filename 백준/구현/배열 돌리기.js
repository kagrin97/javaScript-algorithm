function spinBoard() {
  const [n, d] = board.shift();

  if (Math.abs(d) === 360) {
    for (let i = 0; i < n; i++) {
      console.log(...board[i]);
    }
    return;
  }

  if (d > 0) {
    const spinCnt = d / 45;
    for (let i = 0; i < spinCnt; i++) {
      const a = parseInt(n / 2);
      const boardCopy = JSON.parse(JSON.stringify(board));

      const column = [];
      for (let i = 0; i < n; i++) {
        column.push(board[i][a]);
      }
      for (let i = 0; i < n; i++) {
        boardCopy[n - 1 - i][i] = column.pop();
      }

      const right = [];
      for (let i = 0; i < n; i++) {
        right.push(board[n - 1 - i][i]);
      }
      for (let i = 0; i < n; i++) {
        boardCopy[a][i] = right.shift();
      }

      const row = [];
      for (let i = 0; i < n; i++) {
        row.push(board[a][i]);
      }
      for (let i = 0; i < n; i++) {
        boardCopy[i][i] = row.shift();
      }

      const left = [];
      for (let i = 0; i < n; i++) {
        left.push(board[i][i]);
      }
      for (let i = 0; i < n; i++) {
        boardCopy[i][a] = left.shift();
      }
      board = boardCopy;
    }
  } else {
    const spinCnt = Math.abs(d / 45);
    for (let i = 0; i < spinCnt; i++) {
      const a = parseInt(n / 2);
      const boardCopy = JSON.parse(JSON.stringify(board));

      const column = [];
      for (let i = 0; i < n; i++) {
        column.push(board[i][a]);
      }
      for (let i = 0; i < n; i++) {
        boardCopy[i][i] = column.shift();
      }

      const right = [];
      for (let i = 0; i < n; i++) {
        right.push(board[n - 1 - i][i]);
      }
      for (let i = 0; i < n; i++) {
        boardCopy[i][a] = right.pop();
      }

      const row = [];
      for (let i = 0; i < n; i++) {
        row.push(board[a][i]);
      }
      for (let i = 0; i < n; i++) {
        boardCopy[n - 1 - i][i] = row.shift();
      }

      const left = [];
      for (let i = 0; i < n; i++) {
        left.push(board[i][i]);
      }
      for (let i = 0; i < n; i++) {
        boardCopy[a][i] = left.shift();
      }
      board = boardCopy;
    }
  }
  board.forEach((val) => {
    console.log(...val);
  });
  return;
}

const line = require("fs").readFileSync("./input.txt", "utf8");
const inputData = line.trim().split("\n");

let board = [];

for (let i = 1; i < inputData.length; i++) {
  const input = inputData[i].trim().split(" ");

  if (input.length === 2 && board.length) {
    spinBoard();
    board = [input.map((val) => +val)];
  } else {
    board.push(input.map((val) => +val));
  }
}
spinBoard();
