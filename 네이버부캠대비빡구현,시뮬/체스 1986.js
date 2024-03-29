const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const Q = input[1].split(" ").map(Number);
const K = input[2].split(" ").map(Number);
const P = input[3].split(" ").map(Number);

// Q,K,P 위치 저장
function makeIndex(A) {
  const index = [];
  for (let i = 1; i < A.length; i += 2) {
    const x = A[i];
    const y = A[i + 1];
    index.push([x - 1, y - 1]);
  }
  return index;
}
const QIndex = makeIndex(Q);
const KIndex = makeIndex(K);
const PIndex = makeIndex(P);

// 안전 영역 보드
const board = Array.from(Array(N), () => Array(M).fill(true));

// 체스말 false(장애물) 처리
function dropChess(A) {
  A.forEach((q) => {
    const [x, y] = q;
    board[x][y] = false;
  });
}
dropChess(QIndex);
dropChess(KIndex);
dropChess(PIndex);

// 나이트 움직일수 있는 장소 "go"로 체크
function goKnight(indexArr) {
  // 나이트가 움직일수 있는 8개의 위치
  const dx = [-1, -2, -2, -1, 1, 2, 2, 1];
  const dy = [-2, -1, 1, 2, 2, 1, -1, -2];

  for (let i = 0; i < indexArr.length; i++) {
    const [x, y] = indexArr[i];

    for (let k = 0; k < 8; k++) {
      let nx = x + dx[k];
      let ny = y + dy[k];

      // 밖으로나감
      if (nx >= N || ny >= M || ny < 0 || nx < 0) continue;

      // 이동 장소에 말이 없을때만 이동
      if (board[nx][ny] === true) board[nx][ny] = "go";
    }
  }
}

// 퀸이 움직일수 있는 장소 "go"로 체크
function goQueen(indexArr) {
  // 퀸이 움질일수있는 8개의 방향
  const dx = [-1, 1, 0, 0, -1, -1, 1, 1];
  const dy = [0, 0, 1, -1, -1, 1, -1, 1];

  for (let i = 0; i < indexArr.length; i++) {
    const [x, y] = indexArr[i];

    for (let k = 0; k < 8; k++) {
      let nx = x;
      let ny = y;
      while (true) {
        nx += dx[k];
        ny += dy[k];

        // 범위를 벗어나거나 말을 만나면 종료
        if (nx >= N || ny >= M || nx < 0 || ny < 0 || board[nx][ny] === false) {
          break;
        }
        board[nx][ny] = "go";
      }
    }
  }
}

// 말들이 이동할수 있는 장소를 "go"로 체크
goKnight(KIndex);
goQueen(QIndex);

// 안전영역 검사
let cnt = 0;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (board[i][j] === true) cnt++;
  }
}

console.log(cnt);
