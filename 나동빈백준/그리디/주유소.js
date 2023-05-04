const input = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const road = input[1].split(" ").map((v) => BigInt(v));
const city = input[2].split(" ").map((v) => BigInt(v));

let minPay = 0;
let totalPay = 0n;

for (let i = 0; i < city.length - 1; i++) {
  if (i === 0 || minPay > city[i]) {
    totalPay += city[i] * road[i];
    minPay = city[i];
  } else {
    totalPay += minPay * road[i];
  }
}

console.log(String(totalPay));
