const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, K] = input[0].split(" ").map(Number);
const orderList = input.slice(1).map(Number);

let M = 0; // 마지막으로 불러야할 번호
let curIndex = 0; // 현재 위치
let flag = false;

while (true) {
  // 현재 위치가 보성이라면
  if (curIndex === K) {
    flag = true;
    break;
  }

  // 한바퀴 모두 돌았는데 보성이 차례가 없었다면
  if (M > 151) break;

  // 다음 위치 갱신 및 번호를 1+
  curIndex = orderList[curIndex];
  M++;
}

if (flag) {
  console.log(M);
} else {
  console.log(-1);
}
