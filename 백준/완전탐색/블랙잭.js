const getCombinations = function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNumber - 1);
    const attached = combinations.map((el) => [fixed, ...el]);
    results.push(...attached);
  });
  return results;
};

let input = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input[0].split(" ").map(Number);
const cardList = input[1].split(" ").map(Number);

const combi = getCombinations(cardList, 3);

let maxVal = -1;

combi.forEach((val, idx) => {
  const result = val.reduce((pre, cur) => pre + cur);
  if (maxVal < result && result <= m) {
    maxVal = result;
  }
});
console.log(maxVal);
