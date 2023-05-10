function Draw(x, y, order, board) {
  if (board[x][y] === ".") {
    if (order === "U" || order === "D") {
      board[x][y] = "|";
    }
    if (order === "L" || order === "R") {
      board[x][y] = "-";
    }
  }

  if (board[x][y] === "|") {
    if (order === "L" || order === "R") {
      board[x][y] = "+";
    }
  }

  if (board[x][y] === "-") {
    if (order === "U" || order === "D") {
      board[x][y] = "+";
    }
  }
}

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);

// 진심 이 문제 개쓰레기 문제 input[1]값을 안주는 테스트 케이스도 존재해서 90%에서 런타임 에러 발생함
if (input.length <= 1) {
  const board = Array.from(Array(N), () => Array(N).fill("."));
  board.forEach((b) => console.log(b.join("")));
  process.exit(0);
}

const orders = input[1].split("");

const board = Array.from(Array(N), () => Array(N).fill("."));

const direction = {
  U: [-1, 0],
  D: [1, 0],
  L: [0, -1],
  R: [0, 1],
};

let x = 0,
  y = 0;

orders.forEach((order, index) => {
  let nx = x + direction[order][0];
  let ny = y + direction[order][1];

  if (0 > nx || 0 > ny || N <= nx || N <= ny) {
    return;
  }
  // 현재 위치 그리기
  Draw(x, y, order, board);
  // 다음 위치 그리기
  Draw(nx, ny, order, board);

  x = nx;
  y = ny;
});

board.forEach((b) => console.log(b.join("")));
