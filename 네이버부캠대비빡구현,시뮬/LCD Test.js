const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

let [s, num] = input[0].split(" ");
s = Number(s);

const col = s + 2; // 열
const row = 2 * s + 3; // 행

const top = [0, 2, 3, 5, 6, 7, 8, 9]; // 윗 부분 칠하는 숫자
const topLeft = [0, 4, 5, 6, 8, 9];
const topRight = [0, 1, 2, 3, 4, 7, 8, 9];
const mid = [2, 3, 4, 5, 6, 8, 9]; // 중간 부분 칠하는 숫자
const bottomLeft = [0, 2, 6, 8];
const bottomRight = [0, 1, 3, 4, 5, 6, 7, 8, 9];
const bottom = [0, 2, 3, 5, 6, 8, 9];

const drawTop = (arr) => {
  for (let i = 1; i < s + 1; i++) arr[0][i] = "-";
};

const drawTopLeft = (arr) => {
  for (let i = 1; i < s + 1; i++) arr[i][0] = "|";
};

const drawTopRight = (arr) => {
  for (let i = 1; i < s + 1; i++) arr[i][col - 1] = "|";
};

const drawMid = (arr) => {
  for (let i = 1; i < s + 1; i++) arr[s + 1][i] = "-";
};

const drawBottomLeft = (arr) => {
  for (let i = s + 2; i < row - 1; i++) arr[i][0] = "|";
};

const drawBottomRight = (arr) => {
  for (let i = s + 2; i < row - 1; i++) arr[i][col - 1] = "|";
};

const drawBottom = (arr) => {
  for (let i = 1; i < s + 1; i++) arr[row - 1][i] = "-";
};

// 글자를 입력받고 각 섹션을 칠하는 함수
function draw(num, arr) {
  if (top.includes(num)) drawTop(arr);
  if (topLeft.includes(num)) drawTopLeft(arr);
  if (topRight.includes(num)) drawTopRight(arr);
  if (mid.includes(num)) drawMid(arr);
  if (bottomLeft.includes(num)) drawBottomLeft(arr);
  if (bottomRight.includes(num)) drawBottomRight(arr);
  if (bottom.includes(num)) drawBottom(arr);

  return arr;
}

const results = []; // 모든 칠한 글자를 모아두는 배열

for (let n of num) {
  const arr = Array.from(Array(row), () => Array(col).fill(" "));
  results.push(draw(Number(n), arr));
}

let ans = Array.from(Array(row), () => []); // 정답용 배열

// 각 글자의 row 별로 모두 합쳐주고 마지막에 공백을 삽입해 글자간의 간격을 표시
for (let i = 0; i < row; i++) {
  for (let res = 0; res < results.length; res++) {
    ans[i] = ans[i].concat(results[res][i]);
    ans[i].push(" ");
  }
}

// 맨 마지막 글자의 경우 공백이 존재하면 안되서 공백 삭제
for (let i = 0; i < row; i++) {
  ans[i].pop();
}

for (let a of ans) {
  console.log(a.join(""));
}
