const input = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

let [n, ...times] = input;
n = +n;
times = times.map((val) => val.split(" ").map(Number));

times.sort((a, b) => a[0] - b[0]);
times.sort((a, b) => a[1] - b[1]);

let maxCnt = -1;
let cnt = 0;
let last = 0;

times.forEach((val, idx) => {
  const [start, end] = val;

  if (last <= start) {
    last = end;
    tmp.push(idx);
  } else {
    cnt += 1;
  }
});

console.log(times);
