const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);

// 출근시간, 퇴근시간을 분으로 나타냄
let eventList = [
  [600, 600],
  [1320, 1320],
];

// 놀이기구의 시작,끝나는시간을 분으로 +,- 10을 해줌
for (let i = 1; i < N + 1; i++) {
  const [x, y] = input[i].split(" ");
  const start = Number(x.slice(0, 2)) * 60 + Number(x.slice(2)) - 10;
  const end = Number(y.slice(0, 2)) * 60 + Number(y.slice(2)) + 10;
  eventList.push([start, end]);
}

// 정렬
eventList.sort((a, b) => a[0] - b[0]);

// 쉬는 시간
let rest = 0;
// 그전 놀이기구 끝나는 시간을 기억
let last = 600;

for (let [startTime, endTime] of eventList) {
  // 휴식시간과 그전 놀이기구 끝나는 시간과 다음 놀이기구 시작시간 사이의 휴식시간을 비교
  rest = Math.max(rest, startTime - last);
  // 그전 놀이기구 끝나는 시간을 갱신
  last = Math.max(last, endTime);
}

console.log(rest);
