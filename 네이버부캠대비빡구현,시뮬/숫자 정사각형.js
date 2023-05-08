let input = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);

// N,M 둘중 하나라도 1이라면 정사각형을 만들수가 없기때문에 1을 출력 후 종료
if (N === 1 || M === 1) {
  console.log(1);
  process.exit();
}

const board = [];

for (let i = 1; i < N + 1; i++) {
  board.push(input[i].split("").map(Number));
}

// N,M 둘중 더 짧은 길이만큼 정사각형이 늘어날수있기때문에 최대 정사각형 길이를 할당함
minLen = Math.min(N, M);
// 꼭짓점이 모두 같은 값이 없을 수가 있기떄문에 1을 할당
let maxVal = 1;

// 최소 정사각형 길이 2부터 minLen + 1 만큼의 정사각형 길이로 늘어남
for (let w = 2; w < minLen + 1; w++) {
  // 0부터 x값 최대까지
  for (let i = 0; i < N - w + 1; i++) {
    // 0부터 y값 최대까지
    for (let j = 0; j < M - w + 1; j++) {
      const a = board[i][j]; // 꼭짓점
      const b = board[i + w - 1][j]; // 꼭짓점
      const c = board[i][j + w - 1]; // 꼭짓점
      const d = board[i + w - 1][j + w - 1]; // 꼭짓점

      // 4개 꼭짓점이 모두 같은 값이며 maxVal보다 클 경우 최대 넓이 갱신
      if (a === b && b === c && c === d) {
        maxVal = Math.max(maxVal, w * w);
      }
    }
  }
}

console.log(maxVal);
