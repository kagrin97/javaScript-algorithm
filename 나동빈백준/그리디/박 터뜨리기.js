const input = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

let [N, K] = input[0].split(" ").map(Number);

let sum = 0;
for (let i = 1; i < K + 1; i++) {
  sum += i;
}

if (sum > N) console.log(-1);
else {
  N -= sum;
  if (N % K === 0) console.log(K - 1);
  else console.log(K);
}
