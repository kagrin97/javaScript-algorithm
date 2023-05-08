let input = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
let [x, y, d] = input[1].split(" ").map(Number);
let visited = Array.from(Array(N), () => Array(M).fill(false));

let cnt = 0;

const direction = {
  0: [-1, 0],
  1: [0, 1],
  2: [1, 0],
  3: [0, -1],
};

const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

const board = [];

for (let i = 2; i < N + 2; i++) {
  board.push(input[i].split(" ").map(Number));
}

while (true) {
  // 현재 위치를 청소할수 있으면 청소
  if (board[x][y] === 0 && visited[x][y] === false) {
    visited[x][y] = true;
    cnt++;
  }

  let flag = false;

  // 4 뱡향중 청소 가능한 장소 탐색
  for (let k = 0; k < 4; k++) {
    let nx = x + dx[k];
    let ny = y + dy[k];
    if (board[nx][ny] === 0 && visited[nx][ny] === false) {
      flag = true;
    }
  }

  // 4 방향중 청소 할 곳이 없음
  if (!flag) {
    // d가 0은 2, 2는 0, 1은 3, 3은 1로 바꿔주는 마법의 공식 (d + 2) % 4
    const backDirection = (d + 2) % 4;
    let nx = x + direction[backDirection][0];
    let ny = y + direction[backDirection][1];

    // 후진 할수 있는 곳이라면 이동
    if (board[nx][ny] === 0) {
      x = nx;
      y = ny;
    } else {
      // 후진할수 없으면 cnt 출력후 종료
      console.log(cnt);
      break;
    }
  } else {
    // 북쪽이면 반시계 90도 돌려서 서쪽으로
    if (d === 0) {
      d = 3;
    } else {
      d -= 1;
    }

    let nx = x + direction[d][0];
    let ny = y + direction[d][1];

    // 이동 할수있고 청소한적이 없는 곳이면 이동
    if (board[nx][ny] === 0 && visited[nx][ny] === false) {
      x = nx;
      y = ny;
    }
  }
}
