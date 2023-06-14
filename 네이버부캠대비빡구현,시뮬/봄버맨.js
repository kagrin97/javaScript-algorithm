const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const [H, W, T] = input[0].split(" ").map(Number);
let board = input.slice(1).map((i) => i.split(""));

if (T === 0) {
  board.forEach((b) => console.log(b.join("")));
}

let bombIndex = [];

for (let i = 1; i < T; i++) {
  // 폭탄 모두 설치
  if (i % 2 == 1) {
    bombIndex = installBomb();
  }

  // 일부 폭탄 폭발
  if (i % 2 == 0) {
    explosionBomb(bombIndex);
  }
}

// 폭탄이 설치되어 있지 않은 모든 칸에 폭탄을 설치
// 이미 폭탄이 있는 위치를 기억함
function installBomb() {
  const bombIndex = [];
  for (let i = 0; i < H; i++) {
    for (let j = 0; j < W; j++) {
      if (board[i][j] === "O") bombIndex.push([i, j]);
      else board[i][j] = "O";
    }
  }
  return bombIndex;
}

function explosionBomb(bombIndex) {
  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];

  // 그전부터 있었던 폭탄이 폭발하는 모든 위치를 구함 (자신포함 4방향)
  const explosionBombIndex = [];
  for (let i = 0; i < bombIndex.length; i++) {
    let [x, y] = bombIndex[i];
    explosionBombIndex.push([x, y]);

    for (let k = 0; k < 4; k++) {
      let nx = x + dx[k];
      let ny = y + dy[k];

      if (nx >= H || ny >= W || nx < 0 || ny < 0) continue;

      explosionBombIndex.push([nx, ny]);
    }
  }

  // 실제로 폭발 진행
  for (let i = 0; i < explosionBombIndex.length; i++) {
    const [x, y] = explosionBombIndex[i];
    board[x][y] = ".";
  }
}

board.forEach((b) => console.log(b.join("")));
