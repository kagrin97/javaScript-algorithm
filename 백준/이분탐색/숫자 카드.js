function binarySearch(list, target, left, right) {
  let mid = 0;

  while (left <= right) {
    // 가운데 인덱스
    mid = Math.floor((left + right) / 2);

    if (list[mid] === target) {
      return mid;
    }

    // 대소 비교로 범위 지정
    if (list[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
}

let input = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const arr = input[1].split(" ").map(Number);
const arr2 = input[3].split(" ").map(Number);

const answer = [];

arr.sort((a, b) => a - b);

arr2.forEach((val, idx) => {
  const result = binarySearch(arr, val, 0, arr.length - 1);
  if (result !== -1) {
    answer.push(1);
  } else {
    answer.push(0);
  }
});

console.log(...answer);
