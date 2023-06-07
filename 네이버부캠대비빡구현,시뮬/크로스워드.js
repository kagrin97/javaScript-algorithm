const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const [R, C] = input[0].split(" ").map(Number);
const board = input.slice(1).map((i) => i.split(""));

const strings = new Set();

const findStrings = (tmpString, curString) => {
  // 글자가 끝나는 시점이며 2글자 이상
  if (tmpString.length > 1 && curString === "#") {
    strings.add(tmpString);
    return "";
  }

  // 글자가 끝나는 시점인데 1글자인 글자일 경우 낱말이 아님
  if (curString === "#") {
    return "";
  }

  // 글자가 계속 이어질 경우 글자를 추가함
  if (curString !== "#") return tmpString + curString;

  return tmpString;
};

for (let i = 0; i < R; i++) {
  let tmpString = "";
  for (let j = 0; j < C; j++) {
    tmpString = findStrings(tmpString, board[i][j]);
  }

  // 해당 R or C를 다돌았는데 tmpString에 2글자 이상 존재하면 남는거 더해줌
  if (tmpString.length > 1) {
    strings.add(tmpString);
  }
}

for (let i = 0; i < C; i++) {
  let tmpString = "";
  for (let j = 0; j < R; j++) {
    tmpString = findStrings(tmpString, board[j][i]);
  }

  // 해당 R or C를 다돌았는데 tmpString에 2글자 이상 존재하면 남는거 더해줌
  if (tmpString.length > 1) {
    strings.add(tmpString);
  }
}

const arr = Array.from(strings).sort();
console.log(arr[0]);
