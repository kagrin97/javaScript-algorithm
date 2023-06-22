let input = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const dashIndex = input.indexOf("-");

const dict = input.slice(0, dashIndex); // 사전에 등록된 단어
const boards = input.slice(dashIndex + 1, input.length - 1); // 3*3 보드들

for (let b = 0; b < boards.length; b++) {
  // 해당 보드의 문자정보를 담은 A객체 {L:1, A:2}
  const objA = {};
  const words = boards[b].split("");
  for (let word of words) {
    if (!objA[word]) objA[word] = 1;
    else objA[word] += 1;
  }

  const tmp = []; // 해당 보드로 만들수있는 문자를 담는 배열

  // 사전을 돌면서 지금의 보드로 만들수있는 문자인지 판별해 tmp로 넣음
  for (let d = 0; d < dict.length; d++) {
    const dircWord = dict[d];
    const objB = {};
    for (let dw of dircWord) {
      if (!objB[dw]) objB[dw] = 1;
      else objB[dw] += 1;
    }

    let flag = false;
    for (let [key, value] of Object.entries(objB)) {
      if (!objA[key] || objA[key] < value) {
        flag = true;
        break;
      }
    }
    if (!flag) tmp.push(dircWord);
  }

  // 만들수있는 문자열의 문자 정보를 담는 C객체 (하나도 없어도 0으로 초기화)
  const objC = {};
  for (let c of words) {
    objC[c] = 0;
  }

  // 한 단어에 중복된 알파벳을 1로 침
  for (let t = 0; t < tmp.length; t++) {
    const wordSet = new Set();
    for (let tm of tmp[t]) {
      wordSet.add(tm);
    }
    const arr = Array.from(wordSet);
    for (let ar of arr) {
      objC[ar] += 1;
    }
  }

  // 사전순으로 정렬 및 최소,최대 알파벳과 갯수를 구해서 출력
  const wordArr = Object.entries(objC).sort((a, b) => a[1] - b[1]);
  const minCnt = wordArr[0][1];
  const maxCnt = wordArr[wordArr.length - 1][1];
  let minArr = [];
  let maxArr = [];

  wordArr.forEach((word) => {
    const [str, num] = word;
    if (num === minCnt) {
      minArr.push(str);
    }
    if (num === maxCnt) {
      maxArr.push(str);
    }
  });
  minArr.sort();
  maxArr.sort();

  console.log(minArr.join(""), minCnt, maxArr.join(""), maxCnt);
}
