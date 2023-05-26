const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const nums = input[0].split(" ").map(Number);

// 시계수 찾기
function getClockNum(n) {
  let min = parseInt(n.join("")); // 현재 숫자 배열을 정수로 변환하여 초기 최솟값으로 설정
  for (let i = 1; i < 4; i++) {
    // 4개의 시계수를 모두 비교하기 위해 3번 반복
    const tmp = parseInt(n.slice(i).concat(n.slice(0, i)).join(""));
    // 현재 숫자 배열을 회전시켜 시계수 생성 후 정수로 변환
    if (min > tmp) {
      min = tmp; // 최솟값 갱신
    }
  }
  return min; // 최솟값 반환
}

const clkNum = getClockNum(nums); // 주어진 숫자 배열로 시계수 생성
let cnt = 1; // 1111은 항상 시계수이므로 초기 카운트는 1로 설정

// 1111부터 clkNum까지의 시계수 개수 count
for (let i = 1111; i < clkNum; i++) {
  // 1111부터 clkNum 직전까지 반복
  if (
    !String(i).includes("0") &&
    i === getClockNum(String(i).split("").map(Number))
  ) {
    // 숫자에 0이 없고, 시계수인지 확인
    cnt++; // 시계수이면 카운트 증가
  }
}

console.log(cnt); // 시계수 개수 출력
