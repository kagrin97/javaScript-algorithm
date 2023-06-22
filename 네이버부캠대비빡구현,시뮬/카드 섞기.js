let input = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
let P = input[1].split(" ").map(Number);
const S = input[2].split(" ").map(Number);

let initDeck = [...P];

// 목표로 하는 카드의 순서 lastDeckShape를 생성합니다.
let lastDeckShape = Array(N)
  .fill()
  .map((_, i) => i % 3);

let tmpDeck = Array(N).fill(0);
let cnt = 0;

// 현재 카드의 상태 P가 목표 상태 G와 같지 않은 동안 반복합니다.
while (JSON.stringify(P) !== JSON.stringify(lastDeckShape)) {
  for (let i = 0; i < N; i++) {
    tmpDeck[S[i]] = P[i];
  }

  // 카드의 상태를 새로운 상태로 업데이트합니다.
  P = [...tmpDeck];

  tmpDeck = Array(N).fill(0);
  cnt++;

  if (JSON.stringify(initDeck) === JSON.stringify(P)) {
    cnt = -1;
    break;
  }
}

console.log(cnt);
