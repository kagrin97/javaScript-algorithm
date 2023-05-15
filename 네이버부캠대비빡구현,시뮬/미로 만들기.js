let input = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const orderList = input[1].split("");

const board = Array.from(Array(101), () => Array(101).fill("#"));
let curIndex = [50, 50];

board[curIndex[0]][curIndex[1]] = ".";

let curD = "D";

// 보는 방향을 알파벳으로 나타냄
const direction = {
  U: [-1, 0],
  D: [1, 0],
  L: [0, -1],
  R: [0, 1],
};

// 현재 방향을 기반으로 방향을 바꿔줌
const changeD = (nextD) => {
  const directionMap = {
    D: { L: "R", R: "L" },
    U: { L: "L", R: "R" },
    L: { L: "D", R: "U" },
    R: { L: "U", R: "D" },
  };

  curD = directionMap[curD][nextD];
};

// 미로에서 통과 가능한 [x,y]값들
const passIndexList = [curIndex];

for (let i = 0; i < N; i++) {
  // 직진일 경우 직진해줌
  if (orderList[i] === "F") {
    let nx = curIndex[0] + direction[curD][0];
    let ny = curIndex[1] + direction[curD][1];
    board[nx][ny] = ".";
    curIndex = [nx, ny];
    passIndexList.push([nx, ny]);
  }
  // 보는 방향을 바꿔줌
  else {
    changeD(orderList[i]);
  }
}

// 시작과 끝나는 row값을 얻음
passIndexList.sort((a, b) => a[0] - b[0]);
const startX = passIndexList[0][0];
const endX = passIndexList[passIndexList.length - 1][0];

// 시작과 끝나는 col값을 얻음
passIndexList.sort((a, b) => a[1] - b[1]);
const startY = passIndexList[0][1];
const endY = passIndexList[passIndexList.length - 1][1];

// 2차원 배열을 잘라줌
const newBoard = board
  .slice(startX, endX + 1)
  .map((row) => row.slice(startY, endY + 1));

newBoard.forEach((board) => console.log(board.join("")));
