let input = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, myScore, P] = input[0].split(" ").map(Number);

// N=0일 경우, 내 등수는 1위
if (N === 0) {
  console.log(1);
  process.exit(0);
}
const scoreArr = input.slice(1)[0].split(" ").map(Number);

let flag = false;

for (let i = 0; i < N; i++) {
  // 내 점수가 해당 점수보다 높으면
  if (myScore > scoreArr[i]) {
    // 해당 점수의 위치에 내 점수 삽입
    scoreArr.splice(i, 0, myScore);
    flag = true;

    // P명 이내에 들어가지 않는 경우는 삭제
    if (scoreArr.length >= P) {
      scoreArr.pop();
    }
    break; // 한 개만 삽입하면 되기 때문에 바로 루프 종료
  }
}

// 내 점수가 가장 낮은 점수보다 작으면서 P명 미만인 경우
if (!flag && scoreArr.length < P) {
  scoreArr.push(myScore); // 배열 마지막에 추가
  flag = true; // 바로 밑 조건문을 실행 안하기 위해
}

// 내 점수보다 작거나 같은 점수가 없고, 배열의 크기가 P와 같을 때
if (!flag) {
  console.log(-1); // -1 출력
  process.exit(0);
}

let obj = {};
let beforeScore = 0;
let rankNumber = 1;

// 순위 매기기
scoreArr.forEach((score, index) => {
  // 처음 나타나는 점수이면 1위
  if (beforeScore === 0) {
    obj[score] = rankNumber;
    beforeScore = score;
  }
  // 전 점수와 다르면 rankNumber를 1 증가시키고, 순위 저장
  else if (score !== beforeScore) {
    rankNumber += 1;
    obj[score] = rankNumber;
    beforeScore = score;
  } else {
    // 전 점수와 같은 경우, 다음에 나올 다른 점수 랭크를 위해서 rankNumber 증가
    rankNumber += 1;
  }
});

console.log(obj[myScore]); // 내 순위 출력
