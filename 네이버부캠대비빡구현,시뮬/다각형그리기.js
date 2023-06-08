const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const mainPoly = input[1].split(" ").map(Number);
const M = Number(input[2]);
const otherPoly = input.slice(3).map((i) => i.split(" ").map(Number));

// 1:R, 2:U, 3:L, 4:D
const dx = [0, 0, -1, 0, 1];
const dy = [0, 1, 0, -1, 0];

// 보드에 그려줌
function drawBoard(poly) {
  let x = 50; // 초기 시작할 위치
  let y = 50;
  let indexArr = []; // 그리는 위치
  const board = Array.from(Array(101), () => Array(101).fill("-"));

  for (let p of poly) {
    x += dx[p];
    y += dy[p];
    board[x][y] = "O";
    indexArr.push([x, y]);
  }
  return cutBoard(indexArr, board);
}

// 보드에서 그린곳을 짤라줌
function cutBoard(indexArr, board) {
  indexArr.sort((a, b) => a[0] - b[0]);
  const startX = indexArr[0][0];
  const endX = indexArr[indexArr.length - 1][0];

  indexArr.sort((a, b) => a[1] - b[1]);
  const startY = indexArr[0][1];
  const endY = indexArr[indexArr.length - 1][1];

  return board
    .slice(startX, endX + 1)
    .map((row) => row.slice(startY, endY + 1));
}

// 2개의 2차원 배열이 같은지 비교
function checkSameBoard(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i].length !== arr2[i].length) return false;
    for (let j = 0; j < arr1[i].length; j++) {
      if (arr1[i][j] !== arr2[i][j]) return false;
    }
  }
  return true;
}

// 기준 다격형
const cutMainBoard = drawBoard(mainPoly);

let sameArr = []; // 기준 다각형과 같은 다각형을 넣을 배열

for (let i = 0; i < M; i++) {
  const cutOtherBoard = drawBoard(otherPoly[i]);

  // 기준 다각형과 나머지 다각형을 하나씩 비교
  if (checkSameBoard(cutMainBoard, cutOtherBoard)) {
    sameArr.push(otherPoly[i]);
  }
}

console.log(sameArr.length);

sameArr.forEach((arr) => console.log(...arr));
