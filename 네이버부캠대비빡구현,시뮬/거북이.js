const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

let dx = [0, -1, 0, 1];
let dy = [1, 0, -1, 0];

let T = Number(input[0]);

for (let i = 1; i <= T; i++) {
  let order = [...input[i]];
  let d = 0; // 북: 0 서: 1 남: 2 동: 3
  let minX = 0,
    minY = 0,
    maxX = 0,
    maxY = 0;
  let x = 0,
    y = 0;

  for (let ord of order) {
    if (ord === "F") {
      x += dx[d]; // 앞으로 가기
      y += dy[d];
    } else if (ord === "B") {
      x -= dx[d]; // 뒤로가기
      y -= dy[d];
    } else if (ord === "L") {
      d = d === 3 ? 0 : d + 1;
    } else if (ord === "R") {
      d = d === 0 ? 3 : d - 1;
    }
    minX = Math.min(minX, x);
    minY = Math.min(minY, y);
    maxX = Math.max(maxX, x);
    maxY = Math.max(maxY, y);
  }
  console.log(Math.abs(maxX - minX) * Math.abs(maxY - minY));
}
