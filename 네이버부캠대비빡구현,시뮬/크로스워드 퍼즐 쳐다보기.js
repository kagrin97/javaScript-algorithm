const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const [R, C] = input[0].split(" ").map(Number);
const board = input.slice(1); // 가로로 연속된 문자열들

// 세로로 연속된 문자열들
const board2 = [];
for (let i = 0; i < C; i++) {
  let strTmp = "";
  for (let j = 0; j < R; j++) {
    strTmp += board[j][i];
  }
  board2.push(strTmp);
}

const strSet = new Set(); // 중복 문자열 제거용

// 2글자 이상의 문자들을 strSet에 입력
function makeWord(arr) {
  for (let i = 0; i < arr.length; i++) {
    const strArr = arr[i].split("#");
    for (let str of strArr) {
      if (str.length > 1) strSet.add(str);
    }
  }
}

makeWord(board); // 가로 문자열 검사
makeWord(board2); // 세로 문자열 검사

const sortedStrings = Array.from(strSet).sort();
console.log(sortedStrings[0]);
