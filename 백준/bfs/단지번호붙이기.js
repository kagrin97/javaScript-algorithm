function bfs(startX, startY) {
  let dx = [-1, 1, 0, 0],
    dy = [0, 0, -1, 1];

  let q = [[startX, startY]];

  visited[startX][startY] = 1;

  let apartCnt = 1;

  while (q.length) {
    let [x, y] = q.shift();

    for (let k = 0; k < 4; k++) {
      let nx = x + dx[k];
      let ny = y + dy[k];

      if (0 <= nx && 0 <= ny && nx < n && ny < n) {
        if (board[nx][ny] === 1 && visited[nx][ny] === 0) {
          q.push([nx, ny]);
          visited[nx][ny] = 1;
          apartCnt++;
        }
      }
    }
  }
  return apartCnt;
}

let input = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input[0];
const board = input.slice(1).map((str) => str.split("").map(Number));

let visited = Array.from(Array(n), () => new Array(n).fill(0));

const result = [];
let apart = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (board[i][j] === 1 && visited[i][j] === 0) {
      result.push(bfs(i, j));
      apart++;
    }
  }
}

console.log(apart);

result.sort((a, b) => a - b);
result.forEach((val) => console.log(val));
