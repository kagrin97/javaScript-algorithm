let [n, ...inputData] = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

inputData = inputData.map((val) => +val.trim()).sort((a, b) => b - a);

let maxWeight = -1;

while (inputData.length) {
  const okWeight = inputData.at(-1) * inputData.length;
  if (maxWeight < okWeight) {
    maxWeight = okWeight;
  }
  inputData.pop();
}
console.log(maxWeight);
