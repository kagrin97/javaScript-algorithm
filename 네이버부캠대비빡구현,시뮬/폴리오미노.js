let input = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

let board = input[0];

// XXXX -> AAAA, XX -> BB 치환
board = board.replace(/XXXX/g, "AAAA");
board = board.replace(/XX/g, "BB");

// board에 치환되지 않은 X가 존재할경우 -1 출력후 종료
for (let i = 0; i < board.length; i++) {
  if (board[i] === "X") {
    console.log(-1);
    process.exit();
  }
}
console.log(board);
