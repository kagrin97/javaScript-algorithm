const line = require("fs").readFileSync("./input.txt", "utf8");
let inputData = line.trim();

let board = inputData.replace(/XXXX/g, "AAAA").replace(/XX/g, "BB");

if (board.includes("X")) {
  console.log(-1);
} else {
  console.log(board);
}
