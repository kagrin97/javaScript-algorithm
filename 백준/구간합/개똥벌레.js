let input = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, h] = input[0].split(" ").map(Number);
const down = Array(h + 1).fill(0);
const up = Array(h + 1).fill(0);

for (let i = 1; i < n + 1; i++) {
  const num = +input[i];
  if (i % 2 === 0) {
    up[num]++;
  } else {
    down[num]++;
  }
}

for (let i = h - 1; i > 0; i--) {
  up[i] += up[i + 1];
  down[i] += down[i + 1];
}
console.log(down);
let maxStone = 200001;
let cnt = 0;

for (let i = 1; i < h + 1; i++) {
  const a = down[i] + up[h - i + 1];
  if (a < maxStone) {
    maxStone = a;
    cnt = 1;
  } else if (a === maxStone) {
    cnt++;
  }
}
console.log(maxStone, cnt);
