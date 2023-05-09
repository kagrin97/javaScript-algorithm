const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const room = input.slice(1);

let rowCnt = 0;
let colCnt = 0;

// 가로 방향으로 빈 칸 개수 구하기
for (let i = 0; i < N; i++) {
  let cnt = 0;
  for (let j = 0; j < N; j++) {
    if (room[i][j] === ".") {
      cnt++;
    } else {
      if (cnt >= 2) {
        rowCnt++;
      }
      cnt = 0;
    }
  }
  if (cnt >= 2) {
    rowCnt++;
  }
}

// 세로 방향으로 빈 칸 개수 구하기
for (let i = 0; i < N; i++) {
  let cnt = 0;
  for (let j = 0; j < N; j++) {
    if (room[j][i] === ".") {
      cnt++;
    } else {
      if (cnt >= 2) {
        colCnt++;
      }
      cnt = 0;
    }
  }
  if (cnt >= 2) {
    colCnt++;
  }
}

console.log(rowCnt, colCnt);
