let input = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const number = input[0].split("").map(Number);
const arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let maxVal = -1;

number.forEach((num, index) => {
  if (num === 6 || num === 9) {
    if (arr[9] <= arr[6]) {
      arr[9] += 1;
      maxVal = Math.max(maxVal, arr[9]);
    } else {
      arr[6] += 1;
      maxVal = Math.max(maxVal, arr[6]);
    }
  } else {
    arr[num] += 1;
    maxVal = Math.max(maxVal, arr[num]);
  }
});

console.log(maxVal);
