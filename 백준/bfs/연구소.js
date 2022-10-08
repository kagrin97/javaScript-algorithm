const getCombinations = function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNumber - 1);
    const attached = combinations.map((el) => [fixed, ...el]);
    results.push(...attached);
  });
  return results;
};

function bfs(wallList) {
  const boardCopy = JSON.parse(JSON.stringify(board));

  const dx = [0, 0, -1, 1];
  const dy = [1, -1, 0, 0];

  wallList.forEach((val) => {
    const [x, y] = val;
    boardCopy[x][y] = 1;
  });

  virus.forEach((val) => {
    const [i, j] = val;

    let q = [[i, j]];

    while (q.length) {
      const [x, y] = q.shift();

      for (let k = 0; k < 4; k++) {
        let nx = x + dx[k];
        let ny = y + dy[k];

        if (0 <= nx && 0 <= ny && nx < n && ny < m && !boardCopy[nx][ny]) {
          boardCopy[nx][ny] = 2;
          q.push([nx, ny]);
        }
      }
    }
  });

  let safeCnt = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (boardCopy[i][j] === 0) {
        safeCnt++;
      }
    }
  }

  return safeCnt;
}

let input = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input[0].split(" ").map(Number);
const board = input.slice(1).map((val) => val.split(" ").map(Number));

let virus = [];
let empty = [];

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (board[i][j] === 2) {
      virus.push([i, j]);
    } else if (board[i][j] === 0) {
      empty.push([i, j]);
    }
  }
}

const combi = getCombinations(empty, 3);

let result = 0;

combi.forEach((val, idx) => {
  const safeCnt = bfs(val);
  if (safeCnt > result) {
    result = safeCnt;
  }
});

console.log(result);
