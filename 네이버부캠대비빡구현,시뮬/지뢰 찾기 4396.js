let input = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);

const bombBoard = input.slice(1, N + 1).map((i) => i.split(""));
const onBoard = input.slice(N + 1).map((i) => i.split(""));

// 지뢰 밟은 여부
let flag = false;

// 8방향
const dx = [-1, -1, -1, 0, 0, 1, 1, 1];
const dy = [-1, 0, 1, -1, 1, -1, 0, 1];

for (let x = 0; x < N; x++) {
  for (let y = 0; y < N; y++) {
    // 열린 칸 일 경우
    if (onBoard[x][y] === "x") {
      // 열였는데 폭탄이였을 경우
      if (bombBoard[x][y] === "*") {
        flag = true;
        continue;
      }

      // 8방향을 탐색하면서 폭탄개수를 삽입
      let bombCnt = 0;
      for (let k = 0; k < 8; k++) {
        let nx = x + dx[k];
        let ny = y + dy[k];
        if (0 <= nx && 0 <= ny && N > nx && N > ny) {
          if (bombBoard[nx][ny] === "*") bombCnt++;
        }
      }
      onBoard[x][y] = bombCnt;
    }
  }
}

// 만약 폭탄을 밟았다면 폭탄을 모두 표시해줌
if (flag) {
  for (let x = 0; x < N; x++) {
    for (let y = 0; y < N; y++) {
      if (bombBoard[x][y] === "*") {
        onBoard[x][y] = "*";
      }
    }
  }
}

onBoard.forEach((board) => console.log(board.join("")));
