const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

let [B, R, N] = input[0].split(" ").map(Number);

let Q = [];
let redEnd = 0;
let blueEnd = 0;

for (let i = 1; i <= N; i++) {
  // 이벤트의 시간, 색상, 그리고 선물의 갯수를 파싱합니다.
  let [time, color, cnt] = input[i].split(" ");
  time = Number(time);
  cnt = Number(cnt);

  // 해당 색상의 이벤트가 이미 진행 중이라면, 종료 시간을 새로운 이벤트의 시작 시간으로 설정합니다.
  if (color === "R" && redEnd > time) {
    time = redEnd;
  } else if (color === "B" && blueEnd > time) {
    time = blueEnd;
  }

  // 이벤트의 개수만큼 큐에 이벤트를 추가합니다.
  // 각 이벤트는 처리 시간에 따라 간격을 두고 스케줄됩니다.
  for (let j = 0; j < cnt; j++) {
    if (color === "B") {
      Q.push({ time: time + B * j, color: "B" });
    } else {
      Q.push({ time: time + R * j, color: "R" });
    }
  }

  // 해당 색상의 종료 시간을 업데이트합니다.
  if (color === "B") {
    blueEnd = time + B * cnt;
  } else {
    redEnd = time + R * cnt;
  }
}

// 큐를 시간 순서대로, 그리고 색상에 따라 정렬합니다.
Q.sort((a, b) => a.time - b.time || a.color.localeCompare(b.color));

let b = [];
let r = [];

// 큐에서 각 이벤트를 추출하면서 각 색상에 따라 이벤트의 순서를 기록합니다.
for (let i = 0; i < Q.length; i++) {
  if (Q[i].color === "B") {
    b.push(i + 1);
  } else {
    r.push(i + 1);
  }
}

// 각 색상의 이벤트 수와 순서를 출력합니다.
console.log(b.length);
console.log(b.join(" "));
console.log(r.length);
console.log(r.join(" "));
