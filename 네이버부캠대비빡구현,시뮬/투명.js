// 아직도 의운인 문제 런타입에러가 발생했는데 그 이유가 board값을 벗아나는 값을 받았을경우도 있다는데 그게 말이 되나???

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const targetArr = input.slice(1).map((i) => i.split(" ").map(Number));

let maxX = 0;
let maxY = 0;
targetArr.forEach((target, index) => {
  const [L1, L2, R1, R2] = target;

  maxX = Math.max(maxX, R1);
  maxY = Math.max(maxY, R2);
});

const board = Array.from(Array(maxX + 1), () => Array(maxY + 1).fill(0));

targetArr.forEach((target, index) => {
  const [L1, L2, R1, R2] = target;

  for (let i = L1; i <= R1; i++) {
    for (let j = L2; j <= R2; j++) {
      board[i][j] += 1;
    }
  }
});

let cnt = 0;

for (let i = 1; i <= maxX; i++) {
  for (let j = 1; j <= maxY; j++) {
    if (board[i][j] > M) {
      cnt++;
    }
  }
}

console.log(cnt);
