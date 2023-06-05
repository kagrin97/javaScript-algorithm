const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

// 입력 받기
const [H, W, X, Y] = input[0].split(" ").map(Number);
const board = input.slice(1).map((i) => i.split(" ").map(Number));

// 배열 A 부분을 잘라냄
const A = [];
for (let i = 0; i < H; i++) {
  const tmp = [];
  for (let j = 0; j < W; j++) {
    tmp.push(board[i][j]);
  }
  A.push(tmp);
}

for (let i = 0; i < H; i++) {
  for (let j = 0; j < W; j++) {
    // 현재 위치에서 X or Y를 더했을때 A배열 안이라면 A와 B가 겹치는 공간임
    if (i + X < H && j + Y < W) {
      A[i + X][j + Y] -= A[i][j]; // 겹치는 공간에서 그전 공간을 뺌
    }
  }
}

A.forEach((val) => console.log(...val));
