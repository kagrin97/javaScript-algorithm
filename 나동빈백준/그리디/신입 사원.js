const input = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const testCase = Number(input[0]);
let idx = 1;
for (let i = 0; i < testCase; i++) {
  const num = Number(input[idx++]);
  const arr = [];

  for (let j = 0; j < num; j++) {
    const [a, b] = input[idx++].split(" ").map(Number);
    arr.push([a, b]);
  }

  arr.sort((a, b) => a[0] - b[0]); // 서류 심사 순위 기준으로 오름차순 정렬

  let count = 1; // 첫 번째 사원은 항상 포함되므로 카운트를 1부터 시작
  let minInterviewRank = arr[0][1]; // 첫 번째 사원의 면접 순위를 초기 최소값으로 설정

  for (let j = 1; j < num; j++) {
    const currentInterviewRank = arr[j][1];

    if (currentInterviewRank < minInterviewRank) {
      // 현재 사원의 면접 순위가 최소 면접 순위보다 높은 경우
      count++; // 신입 사원 선발 카운트 증가
      minInterviewRank = currentInterviewRank; // 최소 면접 순위 업데이트
    }
  }

  console.log(count);
}
