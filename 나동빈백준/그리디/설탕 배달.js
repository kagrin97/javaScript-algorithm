const input = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

let n = Number(input[0]);
let cnt = 0;
let flag = false;

while (n >= 0) {
  if (n === 0 || n % 5 === 0) {
    flag = true;
    cnt += parseInt(n / 5);
    console.log(cnt);
    break;
  }
  n -= 3;
  cnt += 1;
}

if (!flag) {
  console.log(-1);
}
