const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
let answer = 0;
const enter = new Map();
const out = [];

// 자동차의 입장 순서를 입력받아 Map에 저장
for (let i = 1; i <= N; i++) {
  const car = input[i];
  enter.set(car, i - 1);
}

// 자동차의 퇴장 순서를 입력받아 배열에 저장
for (let i = N + 1; i < 2 * N + 1; i++) {
  const car = input[i];
  out.push(car);
}

// 현재 자동차 순서와 다음 자동차 순서를 비교하여 추월하는 경우를 찾는 반복문
for (let i = 0; i < N - 1; i++) {
  for (let j = i + 1; j < N; j++) {
    // 현재 자동차의 입장 순서와 다음 자동차의 입장 순서를 비교
    if (enter.get(out[i]) > enter.get(out[j])) {
      // 만약 현재 자동차가 다음 자동차보다 뒤에 입장한 경우 (더 큰 숫자인 경우)
      // 추월하는 경우로 간주하고 answer 변수를 증가시킴
      answer += 1;
      break;
    }
  }
}

console.log(answer);
