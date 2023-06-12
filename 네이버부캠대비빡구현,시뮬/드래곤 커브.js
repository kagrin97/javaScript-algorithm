const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const dx = [1, 0, -1, 0]; // 우, 상, 좌, 하 방향으로의 x 좌표 변화
const dy = [0, -1, 0, 1]; // 우, 상, 좌, 하 방향으로의 y 좌표 변화

const n = Number(input.shift()); // 드래곤 커브의 개수
const board = Array.from(Array(101), () => Array(101).fill(0)); // 그리드 초기화

// 드래곤 커브 정보 입력과 그리드에 표시
for (let i = 0; i < n; i++) {
  let [x, y, d, g] = input[i].split(" ").map(Number);
  board[x][y] = 1; // 시작점 표시
  const move = [d]; // 드래곤 커브의 방향을 저장할 배열 초기화
  // 각 세대별로 드래곤 커브의 방향을 계산하여 move 배열에 추가
  for (let j = 0; j < g; j++) {
    const tmp = [];
    for (let k = 0; k < move.length; k++) {
      tmp.push((move[move.length - k - 1] + 1) % 4); // 이전 세대의 방향을 시계방향으로 90도 회전하여 추가
    }
    move.push(...tmp); // 현재 세대의 방향을 이전 세대 방향의 역순으로 추가
  }
  // 드래곤 커브를 그리드에 표시
  for (let j = 0; j < move.length; j++) {
    const nx = x + dx[move[j]];
    const ny = y + dy[move[j]];
    board[nx][ny] = 1; // 해당 점을 드래곤 커브로 표시
    x = nx;
    y = ny;
  }
}

let result = 0; // 찾은 정사각형 개수
// 그리드를 순회하며 정사각형 찾기
for (let i = 0; i < 100; i++) {
  for (let j = 0; j < 100; j++) {
    // 현재 점과 우측 하단, 좌측 하단, 우측 상단 점이 모두 드래곤 커브에 포함되는지 확인
    if (
      board[i][j] === 1 &&
      board[i + 1][j] === 1 &&
      board[i][j + 1] === 1 &&
      board[i + 1][j + 1] === 1
    ) {
      result += 1; // 정사각형 개수 증가
    }
  }
}

console.log(result); // 결과 출력
