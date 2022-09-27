const line = require("fs").readFileSync("./input.txt", "utf8");
const inputData = line.trim().split("\n");

const [h, w] = inputData[0].split(" ").map((val) => +val);

const rain = inputData[1].split(" ").map((val) => +val);
let water = 0;

for (let i = 0; i < rain.length; i++) {
  const maxLen = Math.max(...rain.slice(0, i + 1));
  const minLen = Math.max(...rain.slice(i));
  const minBlock = Math.min(maxLen, minLen);
  water += minBlock - rain[i];
}
console.log(water);
