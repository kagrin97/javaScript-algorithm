function check(string) {
  const cut = Math.floor(string / 2) + 1;
  for (let i = 1; i < cut; i++) {
    if (string.slice(-i) === string.slice(-(i * 2), -i)) {
      return false;
    }
  }
  return true;
}

function dfs() {
  if (result.length === n) {
    console.log(+result);
    process.exit(0);
  }
  for (let i = 1; i < 4; i++) {
    let tmp = result.slice();
    if (check((tmp += String(i)))) {
      result += String(i);
      dfs();
      result = result.slice(0, result.length - 1);
    }
  }
  return;
}

let input = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim();
const n = +input;
let result = "";
dfs();
