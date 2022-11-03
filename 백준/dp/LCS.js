let input = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const s1 = input[0];
const s2 = input[1];

const len1 = s1.length;
const len2 = s2.length;

const dp = Array(len2).fill(0);

for (let i = 0; i < len1; i++) {
  let cnt = 0;
  for (let j = 0; j < len2; j++) {
    if (cnt < dp[j]) {
      cnt = dp[j];
    } else if (s1[i] === s2[j]) {
      dp[j] = cnt + 1;
    }
  }
}
console.log(Math.max(...dp));
