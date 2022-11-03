function binarySearch(list, target, left, right) {
  let mid = 0;
  let stopIdx = 0;
  let flag = false;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);

    if (list[mid] >= target) {
      left = mid + 1;
      stopIdx = mid;
      flag = true;
    } else {
      right = mid - 1;
    }
  }
  if (flag) {
    return stopIdx + 1;
  }

  return -1;
}

let input = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const [d, n] = input[0].split(" ").map(Number);
const ovenArr = input[1].split(" ").map(Number);
const doughArr = input[2].split(" ").map(Number);

let canOvenArr = [];

let curWidth = -1;

for (let i = 0; i < d; i++) {
  if (curWidth === -1) {
    curWidth = ovenArr[i];
    canOvenArr.push(curWidth);
  } else if (curWidth <= ovenArr[i]) {
    canOvenArr.push(curWidth);
  } else {
    curWidth = ovenArr[i];
    canOvenArr.push(curWidth);
  }
}

let hangOvenIdx = -2;

doughArr.forEach((val) => {
  if (hangOvenIdx === -2) {
    hangOvenIdx = binarySearch(canOvenArr, val, 0, canOvenArr.length - 1);
  } else {
    hangOvenIdx = binarySearch(canOvenArr, val, 0, hangOvenIdx - 2);
  }
});

if (hangOvenIdx === -1) {
  console.log(0);
} else {
  console.log(hangOvenIdx);
}
