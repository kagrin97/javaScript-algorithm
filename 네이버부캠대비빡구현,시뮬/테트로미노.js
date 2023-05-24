const tetrominos = [
  [
    [0, 0],
    [0, 1],
    [1, 0],
    [1, 1],
  ], // ㅁ
  [
    [0, 0],
    [0, 1],
    [0, 2],
    [0, 3],
  ], // ㅡ
  [
    [0, 0],
    [1, 0],
    [2, 0],
    [3, 0],
  ], // ㅣ
  [
    [0, 0],
    [0, 1],
    [0, 2],
    [1, 0],
  ],
  [
    [1, 0],
    [1, 1],
    [1, 2],
    [0, 2],
  ],
  [
    [0, 0],
    [1, 0],
    [1, 1],
    [1, 2],
  ], // ㄴ
  [
    [0, 0],
    [0, 1],
    [0, 2],
    [1, 2],
  ], // ㄱ
  [
    [0, 0],
    [1, 0],
    [2, 0],
    [2, 1],
  ],
  [
    [2, 0],
    [2, 1],
    [1, 1],
    [0, 1],
  ],
  [
    [0, 0],
    [0, 1],
    [1, 0],
    [2, 0],
  ],
  [
    [0, 0],
    [0, 1],
    [1, 1],
    [2, 1],
  ],
  [
    [0, 0],
    [0, 1],
    [0, 2],
    [1, 1],
  ], // ㅜ
  [
    [1, 0],
    [1, 1],
    [1, 2],
    [0, 1],
  ], // ㅗ
  [
    [0, 0],
    [1, 0],
    [2, 0],
    [1, 1],
  ], // ㅏ
  [
    [1, 0],
    [0, 1],
    [1, 1],
    [2, 1],
  ], // ㅓ
  [
    [1, 0],
    [2, 0],
    [0, 1],
    [1, 1],
  ],
  [
    [0, 0],
    [1, 0],
    [1, 1],
    [2, 1],
  ],
  [
    [1, 0],
    [0, 1],
    [1, 1],
    [0, 2],
  ],
  [
    [0, 0],
    [0, 1],
    [1, 1],
    [1, 2],
  ],
];

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map((i) => Number(i));
const board = input.slice(1).map((i) => i.split(" ").map((j) => Number(j)));

let maxVal = 0;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    for (let tetromino of tetrominos) {
      let curVal = 0;
      let flag = false;
      for (let t of tetromino) {
        const dx = t[0];
        const dy = t[1];

        const nx = i + dx;
        const ny = j + dy;

        if (0 > nx || 0 > ny || N <= nx || M <= ny) {
          flag = true;
          break;
        }

        curVal += board[nx][ny];
      }

      if (!flag) {
        maxVal = Math.max(maxVal, curVal);
      }
    }
  }
}
console.log(maxVal);
