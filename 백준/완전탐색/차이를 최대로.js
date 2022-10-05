const getPermutations = function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permutations = getPermutations(rest, selectNumber - 1);
    const attached = permutations.map((el) => [fixed, ...el]);
    results.push(...attached);
  });

  return results;
};

let input = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");
const n = +input[0];
const numList = input[1].split(" ").map(Number);

const per = getPermutations(numList, n);

let maxVal = -1;

per.forEach((arr, idx) => {
  let result = 0;
  for (let i = 0; i < n - 1; i++) {
    result += Math.abs(arr[i] - arr[i + 1]);
  }
  if (maxVal < result) {
    maxVal = result;
  }
});
console.log(maxVal);
