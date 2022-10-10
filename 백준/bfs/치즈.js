function outAirCheck() {
  let airBoard = Array.from(Array(n), () => new Array(m).fill(false));
  let visited = Array.from(Array(n), () => new Array(m).fill(false));

  visited[0][0] = true;
  airBoard[0][0] = true;
  let q = [[0, 0]];
  while (q.length) {
    const [x, y] = q.shift();
    for (let k = 0; k < 4; k++) {
      let nx = x + dx[k];
      let ny = y + dy[k];

      if (0 <= nx && 0 <= ny && nx < n && ny < m) {
        if (!visited[nx][ny] && !board[nx][ny]) {
          visited[nx][ny] = true;
          airBoard[nx][ny] = true;
          q.push([nx, ny]);
        }
      }
    }
  }
  return airBoard;
}

function edgeCheeseCheck(cheeseIndex, airboard) {
  let edgeCheese = [];

  while (cheeseIndex.length) {
    const [x, y] = cheeseIndex.shift();
    let edgeCnt = 0;
    for (let k = 0; k < 4; k++) {
      let nx = x + dx[k];
      let ny = y + dy[k];

      if (0 <= nx && 0 <= ny && nx < n && ny < m) {
        if (airboard[nx][ny]) {
          edgeCnt++;
        }
      }
    }
    if (edgeCnt >= 2) {
      edgeCheese.push([x, y]);
    }
  }
  return edgeCheese;
}

function deleteCheese(edgeCheeseIndex) {
  edgeCheeseIndex.forEach((val) => {
    const [x, y] = val;
    board[x][y] = 0;
  });
}

let input = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input[0].split(" ").map(Number);
const board = input.slice(1).map((str) => str.split(" ").map(Number));
let time = 0;
let isLiveCheese = true;

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

while (isLiveCheese) {
  const airBoard = outAirCheck();
  const cheeseIndex = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] === 1) {
        cheeseIndex.push([i, j]);
      }
    }
  }

  const edgeCheeseIndex = edgeCheeseCheck(cheeseIndex, airBoard);

  deleteCheese(edgeCheeseIndex);
  time++;

  let cheeseCnt = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] === 1) {
        cheeseCnt++;
      }
    }
  }

  if (!cheeseCnt) {
    isLiveCheese = false;
  }
}
console.log(time);
