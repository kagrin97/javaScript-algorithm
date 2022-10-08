function bfs(curX, curY, weight, time, eat) {
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0 - 1, 1];

  let q = [[curX, curY]];
  let canEat = [];

  let minDis = Infinity;

  let visited = Array.from(Array(n), () => new Array(n).fill(0));
  visited[curX][curY] = 1;

  while (q.length) {
    const [x, y] = q.shift();
    for (let k = 0; k < 4; k++) {
      let nx = x + dx[k];
      let ny = y + dy[k];
      if (0 <= nx && 0 <= ny && nx < n && ny < n && visited[nx][ny] === 0) {
        if (sea[nx][ny] === 0 || sea[nx][ny] === weight) {
          visited[nx][ny] = 1;
          q.push([nx, ny]);
        } else if (0 < sea[nx][ny] && sea[nx][ny] < weight) {
          visited[nx][ny] = 1;

          const dis = Math.abs(curX - nx) + Math.abs(curY - ny);
          if (dis < minDis) {
            minDis = dis;
            canEat = [[nx, ny]];
          } else if (dis === minDis) {
            canEat.push([nx, ny]);
          }
        }
      }
    }
  }
  if (canEat.length) {
    canEat.sort((a, b) => a[0] - b[0]);
    let minX = canEat[0][0];
    canEat = canEat.filter((val) => val[0] === minX);
    canEat.sort((a, b) => a[1] - b[1]);
    console.log(canEat);
    let [a, b] = canEat[0];
    eat += 1;
    if (eat === weight) {
      eat = 0;
      weight += 1;
    }
    sea[a][b] = 0;

    return [a, b, weight, time + minDis, eat];
  }

  console.log(time);
  process.exit(0);
}

let input = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input[0];

let sea = input.slice(1).map((val) => val.split(" ").map(Number));

let x;
let y;
let weight = 2;
let time = 0;
let eat = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (sea[i][j] === 9) {
      x = i;
      y = j;
    }
  }
}

while (true) {
  [x, y, weight, time, eat] = bfs(x, y, weight, time, eat);
}
