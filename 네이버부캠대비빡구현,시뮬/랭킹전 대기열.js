const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const [P, M] = input[0].split(" ").map(Number);
const playerList = input.slice(1).map((i) => i.split(" "));

// 플레이어 객체 생성  a: 10, b: 15,
const playerObj = {};
for (let [value, name] of playerList) {
  playerObj[name] = Number(value);
}

const playerMap = new Map();

// 초기 방 설정,  { key => [ 들어갈수 있는 조건, 닉네임 ] }, { 0 => [ '0~20', 'a' ] }
const initNum = Number(playerList[0][0]);
const initCondition = `${initNum - 10}~${initNum + 10}`;
const initArr = [initCondition, playerList[0][1]];
playerMap.set(0, initArr);

for (let i = 1; i < P; i++) {
  let [value, name] = playerList[i];
  value = Number(value);

  let isInput = false;
  for (let [key, room] of playerMap) {
    const roomLen = room.length;
    if (roomLen > M) continue; // 해당 방이 꽉찼으면 넘어감

    // 방의 조건에 맞는 레벨이면 방에 넣음
    const [start, end] = room[0].split("~").map(Number);
    if (start <= value && value <= end) {
      playerMap.set(key, [...playerMap.get(key), name]);
      isInput = true;
      break;
    }
  }
  // 조건에 맞는 방을 찾지 못하면 새로운 방을 개설
  if (!isInput) {
    const condition = `${value - 10}~${value + 10}`;
    playerMap.set(i, [condition, name]);
  }
}

for (let [_, room] of playerMap) {
  room = room.slice(1).sort(); // 조건삭제 및 사전순 정렬

  // 방의 정원이 꽉찼으면 Started! 아니면 Waiting!
  if (room.length >= M) console.log("Started!");
  else console.log("Waiting!");

  // 방을 돌면서 레벨과 닉네임을 출력함
  for (let r of room) {
    console.log(playerObj[r], r);
  }
}
