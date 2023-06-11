function timeToMimute(time) {
  const [h, m] = time.split(":").map(Number);
  return h * 60 + m;
}

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

let [S, E, Q] = input[0].split(" ");
const chatList = input.slice(1).map((i) => i.split(" "));

// 시간을 분으로 변환
S = timeToMimute(S);
E = timeToMimute(E);
Q = timeToMimute(Q);

// map으로 닉네임 : [채팅기록(분단위)....] ex) 'shinyo17' => [ 360, 719 ],
const chatMap = new Map();
for (let i = 0; i < chatList.length; i++) {
  let [time, name] = chatList[i];
  time = timeToMimute(time);

  if (chatMap.has(name)) {
    chatMap.set(name, [...chatMap.get(name), time]);
  } else {
    chatMap.set(name, [time]);
  }
}

let cnt = 0;
for (let [name, timeArr] of chatMap) {
  const isInput = checkInput(timeArr);
  const isOutput = checkOutput(timeArr);

  // 개강총회 시작전, 중간에 채팅기록 이있으면 cnt++
  if (isInput && isOutput) cnt++;
}

// 개강총회 시작전 채팅기록 여부
function checkInput(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= S) return true;
  }
  return false;
}

// 개강총회 끝 <= 채팅기록 <= 개강총회 스트리밍 끝, 안에 채팅여부
function checkOutput(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (E <= arr[i] && arr[i] <= Q) return true;
  }
  return false;
}

console.log(cnt);
