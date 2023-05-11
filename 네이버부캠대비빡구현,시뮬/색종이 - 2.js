let input = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const papers = input.slice(1).map((line) => line.split(" ").map(Number));

// 보드 크기를 101로 함으로써 보드를 넘어가는 로직을 따로 작성하지 않아도됨
const board = Array.from({ length: 101 }, () => Array(101).fill(0));

// 10 * 10 검은색 종이를 붙이는 함수
function markPaperOnBoard(board, x, y) {
  for (let i = x; i < x + 10; i++) {
    for (let j = y; j < y + 10; j++) {
      board[i][j] = 1;
    }
  }
}

function countPerimeter(board) {
  let perimeter = 0;

  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];

  // 1 ~ 100까지 검사함으로써 벗어나는 코드 작성안해도딤
  for (let x = 1; x <= 100; x++) {
    for (let y = 1; y <= 100; y++) {
      if (board[x][y] === 1) {
        for (let k = 0; k < 4; k++) {
          const nx = x + dx[k];
          const ny = y + dy[k];
          // 검은색 영역의 4방향의 갯수가 해당 검은색 영역의 둘레값임
          if (board[nx][ny] === 0) {
            perimeter++;
          }
        }
      }
    }
  }

  return perimeter;
}

for (const [x, y] of papers) {
  markPaperOnBoard(board, x, y);
}

const perimeter = countPerimeter(board);
console.log(perimeter);

// 배열의 크기를 101 x 101로 설정하는 이유는 두 가지가 있습니다.

// 문제에서 주어진 도화지의 크기가 100 x 100이기 때문에, 색종이의 최대 크기를 포함할 수 있는 배열을 생성해야 합니다.

// 둘레를 계산할 때 4방향(상, 하, 좌, 우)을 탐색할 경우, 배열의 경계를 벗어나지 않도록 하기 위함입니다. 배열의 크기를 101 x 101로 설정하면 경계 체크를 따로 하지 않아도 됩니다. 만약 100 x 100으로 설정하면, 경계를 벗어나지 않는지 확인하는 추가적인 코드가 필요합니다.

// 따라서, 배열의 크기를 101 x 101로 설정함으로써 코드를 간결하게 유지할 수 있습니다.
