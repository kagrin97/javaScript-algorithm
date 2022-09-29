const line = require("fs").readFileSync("./input.txt", "utf8");
let inputData = line.trim().split("\n");

const roadDistance = inputData[1].split(" ").map((v) => BigInt(v));
const oilPrice = inputData[2].split(" ").map((v) => BigInt(v));

let result = 0n;
let minPrice = oilPrice[0];

for (let i = 0; i < roadDistance.length; i++) {
  if (oilPrice[i] < minPrice) {
    minPrice = oilPrice[i];
  }

  result += minPrice * roadDistance[i];
}

console.log(String(result));
