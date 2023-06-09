const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const lectureArr = input.slice(1, N + 1).map((i) => i.split(" ").map(Number));
const M = Number(input[N + 1]);
const studentArr = input.slice(N + 2).map((i) => i.split(" ").map(Number));

// 강의 시간표
const lectureMap = new Map();
for (let i = 0; i < N; i++) {
  lectureMap.set(i, lectureArr[i].slice(1));
}

// 학생 시간표
const studentMap = new Map();
for (let i = 0; i < M; i++) {
  studentMap.set(i, studentArr[i].slice(1));
}

const result = [];
for (let i = 0; i < M; i++) {
  const curStudentArr = studentMap.get(i);

  let watchCnt = 0;
  for (let [key, value] of lectureMap) {
    const isWatch = value.every((item) => curStudentArr.includes(item));
    if (isWatch) watchCnt++;
  }

  result.push(watchCnt);
}

result.forEach((r) => console.log(r));
