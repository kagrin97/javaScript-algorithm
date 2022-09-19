const { checkPrime } = require("crypto");

const line = require("fs").readFileSync("./input.txt", "utf8");
const inputData = line.trim().split("\n");

const board = inputData.map((val) => val.split(" ").map((v) => +v));

// → ↓ ↘ ↗
const dx = [0, 1, 1, -1];
const dy = [1, 0, 1, 1];

for (let x = 0; x < 19; x++) {
  for (let y = 0; y < 19; y++) {
    if (board[x][y] != 0) {
      let focus = board[x][y];

      for (let k = 0; k < 4; k++) {
        let cnt = 1;
        let nx = dx[k] + x;
        let ny = dy[k] + y;
        while (
          0 <= nx &&
          nx < 19 &&
          0 <= ny &&
          ny < 19 &&
          board[nx][ny] === focus
        ) {
          cnt += 1;

          if (cnt === 5) {
            if (0 <= x - dx[k] < 19 && 0 <= y - dy[k] < 19) {
              if (board[x - dx[k]][y - dy[k]] === focus) {
                break;
              }
            }
            if (0 <= nx + dx[k] < 19 && 0 <= ny + dy[k] < 19) {
              if (board[x - dx[k]][y - dy[k]] === focus) {
                break;
              }
            }
            console.log(focus);
            console.log(x + 1, y + 1);
            process.exit();
          }
          nx += dx[k];
          ny += dy[k];
        }
      }
    }
  }
}
console.log(0);
