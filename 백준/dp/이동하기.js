let input = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input[0].split(" ").map(Number);

const board = input.slice(1).map((str) => str.split(" ").map(Number));

const dx = [-1, -1, 0];
const dy = [0, -1, -1];

for (let x = 0; x < n; x++) {
  for (let y = 0; y < m; y++) {
    let maxVal = 0;
    for (let k = 0; k < 3; k++) {
      let beforeX = x + dx[k];
      let beforeY = y + dy[k];
      if (0 <= beforeX && 0 <= beforeY && beforeX < n && beforeY < m) {
        if (maxVal < board[beforeX][beforeY]) {
          maxVal = board[beforeX][beforeY];
        }
      }
    }
    if (maxVal) {
      board[x][y] += maxVal;
    }
  }
}
console.log(board[n - 1][m - 1]);
