const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const questionList = input.slice(1).map((str) => str.split(" "));

// 가능한 숫자 후보들을 저장할 배열
const candiList = [];

// 1부터 9까지 가능한 모든 세 자리 수를 후보로 추가
for (let i = 1; i <= 9; i++) {
  for (let j = 1; j <= 9; j++) {
    if (j === i) continue;
    for (let k = 1; k <= 9; k++) {
      if (k === i || k === j) continue;
      candiList.push(`${i}${j}${k}`);
    }
  }
}

const result = [];

for (let candidate of candiList) {
  let flag = false;
  for (let question of questionList) {
    let [number, stlike, ball] = question;
    stlike = Number(stlike);
    ball = Number(ball);

    let stlikeCnt = 0;
    let ballCnt = 0;

    for (let c = 0; c < candidate.length; c++) {
      // 같은 위치에 같은 값이 존재하면 stlikeCnt++
      if (candidate[c] === number[c]) stlikeCnt++;
      // 같은 위치에 값이 다르며 다른 곳에 값이 존재할경우
      else if (number.includes(candidate[c])) ballCnt++;
    }

    // 갯수가 맞지 않을경우
    if (stlike !== stlikeCnt || ball !== ballCnt) {
      flag = true;
      break;
    }
  }

  // 모든 경우를 충족하는 숫자는 삽입
  if (!flag) result.push(candidate);
}

console.log(result.length);
