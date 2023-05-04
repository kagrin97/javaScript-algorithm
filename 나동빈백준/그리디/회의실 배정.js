const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);

let arr = [];

for (let i = 1; i < N + 1; i++) {
  const [start, end] = input[i].split(" ").map(Number);
  arr.push([start, end]);
}

arr.sort((a, b) => {
  if (a[1] === b[1]) {
    return a[0] - b[0];
  } else {
    return a[1] - b[1];
  }
});

let preEnd = arr[0][1];
let cnt = 1;
for (let i = 1; i < N; i++) {
  const [start, end] = arr[i];
  if (preEnd <= start) {
    cnt++;
    preEnd = end;
  }
}

console.log(cnt);
