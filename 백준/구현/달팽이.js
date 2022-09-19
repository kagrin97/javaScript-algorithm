const line = require("fs").readFileSync("./input.txt", "utf8");
const inputData = line.trim().split("\n");

const n = +inputData[0];
let findNumber = +inputData[1];
const board = Array.from(Array(n), () => new Array(n).fill(0));

let a = n * n;

let curLocation = [0, 0];
let dx = 1;
let dy = 0;

board[0][0] = a;
a -= 1;

while (a != 0) {
  const [x, y] = curLocation;
  nx = dx + x;
  ny = dy + y;

  if (0 > nx || n <= nx || 0 > ny || n <= ny || board[nx][ny] != 0) {
    if (dx === 1 && dy === 0) {
      (dx = 0), (dy = 1);
    } else if (dx === 0 && dy === 1) {
      (dx = -1), (dy = 0);
    } else if (dx === -1 && dy === 0) {
      (dx = 0), (dy = -1);
    } else if (dx === 0 && dy === -1) {
      (dx = 1), (dy = 0);
    }
    nx = dx + x;
    ny = dy + y;
  }
  board[nx][ny] = a;
  a -= 1;
  curLocation = [nx, ny];

  if (board[nx][ny] === findNumber) {
    findNumber = [nx + 1, ny + 1];
  }
}

board.forEach((val) => {
  console.log(val.join(" "));
});

console.log(findNumber.join(" "));
