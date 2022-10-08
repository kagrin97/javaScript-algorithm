function bfs() {
  const dx = [0, 0, -1, 1];
  const dy = [1, -1, 0, 0];

  let visited = Array.from(Array(n), () => new Array(m).fill(false));
  let distance = Array.from(Array(n), () => new Array(m).fill(0));

  visited[0][0] = true;
  distance[0][0] = 1;

  let q = [[0, 0]];

  while (q.length) {
    const [x, y] = q.shift();

    for (let k = 0; k < 4; k++) {
      let nx = x + dx[k];
      let ny = y + dy[k];

      if (0 <= nx && 0 <= ny && nx < n && ny < m) {
        if (!visited[nx][ny] && board[nx][ny]) {
          q.push([nx, ny]);
          visited[nx][ny] = true;
          distance[nx][ny] = distance[x][y] + 1;
        }
      }
    }
  }
  console.log(distance[n - 1][m - 1]);
}

let input = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input[0].split(" ").map(Number);

const board = input.slice(1).map((str) => str.split("").map(Number));

bfs();
