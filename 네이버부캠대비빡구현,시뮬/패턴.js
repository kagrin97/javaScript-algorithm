const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const L = Number(input[0]);
const numList = input[1].split(" ").map(Number);

const set = new Set(numList);

// 중복된 숫자가 있을경우 패턴이 안됨
if (numList.length !== set.size) {
  console.log("NO");
  process.exit(0);
}

// 방문한 숫자 패드
const visited = Array(10).fill(false);

// 1 -> 3, 3 -> 1 로 이동할때 2를 거쳐야해서 13:2 임
const obj = {
  13: 2,
  17: 4,
  19: 5,
  28: 5,
  37: 5,
  39: 6,
  46: 5,
  79: 8,
};

for (let i = 0; i < L - 1; i++) {
  const curNumber = numList[i]; // 현재 숫자
  const nextNumber = numList[i + 1]; // 다음 숫자

  const minVal = Math.min(curNumber, nextNumber);
  const maxVal = Math.max(curNumber, nextNumber);

  // 1 -> 3, 3 -> 1을 모두 13으로 바꿔줌
  const str = String(minVal) + String(maxVal);

  // 중간에 거쳐야하는 숫자패드가 있는 수열이라면
  if (obj[str]) {
    const midNumber = obj[str];

    // 중간에 거쳐야하는 숫자패드에 간적이없다면 패턴이 안됨
    if (!visited[midNumber]) {
      console.log("NO");
      process.exit(0);
    }
  } else {
    visited[curNumber] = true; // 방문 처리
    visited[nextNumber] = true;
  }
}

console.log("YES");
