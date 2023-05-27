const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const board = input.slice(1).map((i) => i.split(""));

if (N <= 2) {
  console.log("ongoing");
  process.exit(0);
}

// 수평, 수직
const defaultDx = [1, -1, 0, 0];
const defaultDy = [0, 0, 1, -1];

// 대각선
const daeGakDx = [-1, -1, 1, 1];
const daeGakDy = [-1, 1, -1, 1];

// 세 글자가 행, 열, 또는 대각선으로 연속할 때를 검사
function winnerCheck(dx, dy, i, j, mainName) {
  // 4방향 검사
  for (let k = 0; k < 4; k++) {
    // 42,43줄 코드에서 x,y를 다음 경로로 갱신하기때문에 초기에 본래 값으로 갱신해야함
    let x = i;
    let y = j;

    let sameNumCnt = 1;
    // 현재글자 포함 2번을 더 검사해야 세글자가 동일한지 검사할수있음
    for (let n = 0; n < 2; n++) {
      const nx = x + dx[k];
      const ny = y + dy[k];

      if (0 > nx || 0 > ny || N <= nx || N <= ny) break;

      // 첫글자와 다음글자들이 같으면
      if (board[nx][ny] === mainName) {
        sameNumCnt++;
        x = nx; // 다음 위치 갱신
        y = ny; // 다음 위치 갱신
      } else {
        break;
      }
    }

    // 3개의 글자가 같으면 그 글자가 정답임
    if (sameNumCnt === 3) {
      console.log(mainName);
      process.exit(0);
    }
  }
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (board[i][j] !== ".") {
      const mainName = board[i][j]; // 기준 글자

      // 수평, 수직 검사
      winnerCheck(defaultDx, defaultDy, i, j, mainName);

      // 대각선 검사
      winnerCheck(daeGakDx, daeGakDy, i, j, mainName);
    }
  }
}

console.log("ongoing");
