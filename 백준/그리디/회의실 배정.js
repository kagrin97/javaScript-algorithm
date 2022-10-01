const line = require("fs").readFileSync("./input.txt", "utf8");
let inputData = line.trim().split("\n");

const n = +inputData[0];

const timeList = [];

for (let i = 1; i < n + 1; i++) {
  const [startTime, finishTime] = inputData[i].split(" ").map(Number);
  timeList.push([startTime, finishTime]);
}

timeList.sort((a, b) => a[0] - b[0]);
timeList.sort((a, b) => a[1] - b[1]);

let cnt = 0;
let last = 0;
console.log(timeList);
timeList.forEach((val) => {
  const [startTime, finishTime] = val;
  if (startTime >= last) {
    cnt++;
    last = finishTime;
    console.log(startTime, finishTime);
  }
});

console.log(cnt);
