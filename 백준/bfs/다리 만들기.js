function makeBridge(edgeSea) {
  let result = Infinity;

  while (edgeSea.length) {
    const [x, y, number] = edgeSea.shift();

    for (let k = 0; k < 4; k++) {
      let nx = x + dx[k];
      let ny = y + dy[k];
      if (0 <= nx && 0 <= ny && nx < n && ny < n) {
        if (!board[nx][ny]) {
          board[nx][ny] = number;
          distance[nx][ny] = distance[x][y] + 1;
          edgeSea.push([nx, ny, number]);
        } else if (board[nx][ny] !== number) {
          result = Math.min(result, distance[nx][ny] + distance[x][y]);
        }
      }
    }
  }
  console.log(result);
}

function numbering() {
  let edgeSea = [];
  let number = 1;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 1 && !visited[i][j]) {
        visited[i][j] = true;
        board[i][j] = number;

        let q = [[i, j]];

        while (q.length) {
          const [x, y] = q.shift();

          for (let k = 0; k < 4; k++) {
            let nx = x + dx[k];
            let ny = y + dy[k];

            if (0 <= nx && 0 <= ny && nx < n && ny < n && !visited[nx][ny]) {
              if (board[nx][ny] === 1) {
                q.push([nx, ny]);
                board[nx][ny] = number;
                visited[nx][ny] = true;
              } else if (board[nx][ny] === 0) {
                edgeSea.push([x, y, number]);
              }
            }
          }
        }
        number++;
      }
    }
  }

  makeBridge(edgeSea);
}

let input = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input[0];
const board = input.slice(1).map((str) => str.split(" ").map(Number));

let visited = Array.from(Array(n), () => new Array(n).fill(false));
let distance = Array.from(Array(n), () => new Array(n).fill(0));

const dx = [1, -1, 0, 0];
const dy = [0, 0, -1, 1];

numbering();
