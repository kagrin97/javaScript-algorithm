const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);

const assignment = input.slice(1).map((i) => i.split(" ").map(Number));

const stack = []; // 새로운 과제가 생길시 그 전 과제를 모아두는 곳
let preAssignment = []; //
let totalPoint = 0;

for (let i = 0; i < N; i++) {
  const type = assignment[i][0];

  if (type === 1) {
    const [_, point, endTime] = assignment[i];
    if (preAssignment.length !== 0) {
      stack.push(preAssignment); // 이전 과제를 스택에 저장
    }
    preAssignment = [point, endTime - 1];
  } else {
    preAssignment[1] -= 1;
  }

  if (preAssignment[1] === 0) {
    totalPoint += preAssignment[0];
    if (stack.length) {
      preAssignment = stack.pop(); // 스택에서 이전 과제를 꺼내옴
    } else {
      preAssignment = []; // 이전 과제가 없는 경우
    }
  }
}

console.log(totalPoint);
