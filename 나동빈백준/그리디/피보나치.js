const input = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const pibo = [0, 1];
while (pibo[pibo.length - 1] < 1e9)
  pibo.push(pibo[pibo.length - 1] + pibo[pibo.length - 2]);

const teseCase = Number(input[0]);

for (let i = 1; i < teseCase + 1; i++) {
  let number = Number(input[i]);
  const result = [];
  let len = pibo.length;
  while (number > 0) {
    if (pibo[len] <= number) {
      number -= pibo[len];
      result.push(pibo[len]);
    }
    len--;
  }
  console.log(...result.reverse());
}
