let input = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

let [kingLocation, stoneLocation, N] = input[0].split(" ");
N = Number(N);

const direction = {
  R: [0, 1],
  L: [0, -1],
  B: [1, 0],
  T: [-1, 0],
  RT: [-1, 1],
  LT: [-1, -1],
  RB: [1, 1],
  LB: [1, -1],
};

const Y = {
  A: 0,
  B: 1,
  C: 2,
  D: 3,
  E: 4,
  F: 5,
  G: 6,
  H: 7,
  0: "A",
  1: "B",
  2: "C",
  3: "D",
  4: "E",
  5: "F",
  6: "G",
  7: "H",
};

const board = Array.from(Array(8), () => Array(8).fill(0));
let [k2, k1] = kingLocation.split("");
let [s2, s1] = stoneLocation.split("");
(k2 = Y[k2]), (k1 = 8 - Number(k1));
(s2 = Y[s2]), (s1 = 8 - Number(s1));

// 킹 위치
board[k1][k2] = 2;
// 돌 위치
board[s1][s2] = 1;

for (let i = 1; i < N + 1; i++) {
  // 명령어
  const order = input[i];

  // 킹의 다음 위치
  let nxK = k1 + direction[order][0];
  let nyK = k2 + direction[order][1];

  // 킹의 다음 위치가 보드를 벗어날때
  if (0 > nxK || 0 > nyK || 8 <= nxK || 8 <= nyK) {
    continue;
  }

  // 킹의 다음 위치가 스톤 위치와 동일 할떄
  if (nxK === s1 && nyK === s2) {
    let nxS = s1 + direction[order][0];
    let nyS = s2 + direction[order][1];
    // 킹에 의해 돌이 밀려났는데 보드를 벗어날떄
    if (0 > nxS || 0 > nyS || 8 <= nxS || 8 <= nyS) {
      continue;
    }

    // 돌과 킹을 옮김
    board[nxS][nyS] = 1;
    board[nxK][nyK] = 2;
    board[k1][k2] = 0;

    // 현재 킹, 돌 위치를 [7,0] -> A1 형태로 변환
    stoneLocation = `${Y[nyS]}${8 - nxS}`;
    kingLocation = `${Y[nyK]}${8 - nxK}`;

    // k1, k2, s1, s2값 갱신
    (k1 = nxK), (k2 = nyK);
    (s1 = nxS), (s2 = nyS);
  }

  // 킹을 옮김
  board[k1][k2] = 0;
  board[nxK][nyK] = 2;
  kingLocation = `${Y[nyK]}${8 - nxK}`;
  (k1 = nxK), (k2 = nyK);
}

console.log(kingLocation);
console.log(stoneLocation);
