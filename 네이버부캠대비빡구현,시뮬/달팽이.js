let input = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const findNumber = Number(input[1]);

const board = Array.from(Array(N), () => Array(N).fill(0));
const visited = Array.from(Array(N), () => Array(N).fill(false));

let curNumber = N * N;

board[0][0] = curNumber;
visited[0][0] = true;

let curD = "D";
let x = 0;
let y = 0;

// 초기 N * N 값이 찾는 값이면 찾아줌
const findIndex = [];
if (curNumber === findNumber) findIndex.push(x + 1, y + 1);

// 해당 방향의 인덱스
const direction = {
  D: [1, 0],
  U: [-1, 0],
  L: [0, -1],
  R: [0, 1],
};

// 방향을 바꿔주는 함수
const changeD = () => {
  const directionMap = {
    D: "R",
    U: "L",
    L: "D",
    R: "U",
  };

  curD = directionMap[curD];
};

// 2이상일때 실행됨
while (curNumber > 1) {
  let nx = x + direction[curD][0];
  let ny = y + direction[curD][1];

  // board를 벗어나면 방향을 바꿔주고 넘어감
  if (0 > nx || 0 > ny || N <= nx || N <= ny) {
    changeD();
    continue;
  }

  // 이미 방문한 곳이면 방향을 바꿔주고 넘어감
  if (visited[nx][ny] === true) {
    changeD();
    continue;
  }

  curNumber--;

  board[nx][ny] = curNumber;
  visited[nx][ny] = true;

  x = nx;
  y = ny;

  // 해당 값이 찾는 값이면 넣어줌
  if (curNumber === findNumber) findIndex.push(x + 1, y + 1);
}

board.forEach((b) => console.log(...b));
console.log(...findIndex);
