const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

// 입력 받기
const N = Number(input[0]);
const scoreList = input.slice(1);

// 초기화
let aTeamScore = 0;
let bTeamScore = 0;
const score = [];
let answer = [0, 0];

// 각 경기의 점수와 시간 계산
scoreList.forEach((v) => {
  const [team, t] = v.split(" ");
  const [mm, ss] = t.split(":");
  if (team == 1) {
    aTeamScore++;
  } else {
    bTeamScore++;
  }
  const time = Number(mm) * 60 + Number(ss);
  if (aTeamScore > bTeamScore) {
    score.push([1, time]);
  } else if (bTeamScore > aTeamScore) {
    score.push([2, time]);
  } else {
    score.push([0, time]);
  }
});

// 마지막 경기 추가
score.push([0, 2880]);

// 경기별 시간 차 계산
for (let i = 1; i < score.length; i++) {
  if (score[i - 1][0] != 0) {
    answer[score[i - 1][0] - 1] += score[i][1] - score[i - 1][1];
  }
}

// 출력 형식으로 변환
answer = answer
  .map((v) => {
    const mm = String(Math.floor(v / 60)).padStart(2, "0");
    const ss = String(v % 60).padStart(2, "0");
    return `${mm}:${ss}`;
  })
  .join("\n");

// 결과 출력
console.log(answer);
