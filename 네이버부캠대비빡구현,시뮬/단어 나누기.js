let input = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const string = input[0];
let arr = [];

// left 부분을 0 ~ string.length - 2 까지
for (let i = 0; i < string.length - 2; i++) {
  // mid 부분을 i+1 ~ string.length - 1 까지
  for (let j = i + 1; j < string.length - 1; j++) {
    // right 부분을 j+1 ~ string.length 까지
    for (let k = j + 1; k < string.length; k++) {
      // string의 0 ~ j까지 자르고 뒤집음
      const left = string.substring(0, j).split("").reverse().join("");
      const mid = string.substring(j, k).split("").reverse().join("");
      const right = string.substring(k).split("").reverse().join("");

      const result = left + mid + right;

      arr.push(result);
    }
  }
}

console.log(arr.sort()[0]);
