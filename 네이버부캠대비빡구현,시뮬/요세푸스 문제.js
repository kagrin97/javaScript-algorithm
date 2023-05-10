let input = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

let [N, K] = input[0].split(" ").map(Number);

const arr = Array.from(Array(N), (_, i) => i + 1);
const result = [];

let i = 0;
while (arr.length > 0) {
  // i의 값을 가져온다
  i = (i + K - 1) % arr.length;

  // 제거한 사람 추가
  result.push(arr[i]);

  // i위치 제거
  arr.splice(i, 1);
}

console.log(`<${result.join(", ")}>`);
