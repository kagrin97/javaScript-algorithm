const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, W, L] = input[0].split(" ").map(Number);
let trucks = input[1].split(" ").map(Number);

let bridge = Array(W).fill([]); // 실제 다리위 트럭
let bridgeWeight = 0; // 현재 다리의 무게

let time = 0;

while (trucks.length) {
  time++;
  bridge.shift(); // 다리 위 트럭들을 이동시켜줌
  bridge.push([]);

  // 다리의 현재 무게를 새로구함
  bridgeWeight = 0;
  for (let b of bridge) {
    if (b.length) bridgeWeight += b[0];
  }

  const nextTruckWeight = trucks[0]; // 다리에 진입해야할 다음 트럭 무게
  // 다음 트럭이 진입후의 다리 무게
  const nextBridgeWeight = nextTruckWeight + bridgeWeight;

  // 다리 무게가 하중을 넘어서면 트럭이 진입하지 않음
  if (nextBridgeWeight > L) continue;

  // 다리 무게가 하중을 넘지 않으면 트럭이 진입함
  bridge[bridge.length - 1] = [nextTruckWeight];
  trucks.shift();
}

// 맨 마지막 트럭이 다리위를 통과 할때까지 시간을 더해줌
for (let i = bridge.length - 1; i >= 0; i--) {
  if (bridge[i].length) {
    time += i + 1;
    break;
  }
}

console.log(time);
