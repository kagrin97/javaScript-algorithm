function sort(array) {
  return array.sort((a, b) => {
    if (a[2] === b[2]) {
      if (a[0] === b[0]) {
        return b[1] - a[1];
      }
      return b[0] - a[0];
    } else {
      return b[2] - a[2];
    }
  });
}

function bfs(map, start, weight) {
  const visited = Array.from(Array(n), () => Array(n).fill(false));
  const distance = Array.from(Array(n), () => Array(n).fill(0));
  let queue = [start];
  [x, y] = start;
  visited[x][y] = true;
  map[x][y] = 0;
  let canEatArr = [];

  while (queue.length) {
    const [curX, curY] = queue.shift();
    for (let k = 0; k < 4; k++) {
      let nx = curX + dx[k];
      let ny = curY + dy[k];

      if (0 <= nx && 0 <= ny && nx < n && ny < n && !visited[nx][ny]) {
        if (map[nx][ny] <= weight) {
          queue.push([nx, ny]);
          visited[nx][ny] = true;
          distance[nx][ny] = distance[curX][curY] + 1;
          if (map[nx][ny] < weight && map[nx][ny] !== 0) {
            canEatArr.push([nx, ny, distance[nx][ny]]);
          }
        }
      }
    }
  }
  return canEatArr;
}

function solution() {
  let weight = 2;
  let start = [0, 0];
  let eatCnt = 0;
  let time = 0;

  const map = input.slice(1).map((str) => str.split(" ").map(Number));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (map[i][j] === 9) {
        start = [i, j];
      }
    }
  }

  while (true) {
    const canEatArr = bfs(map, start, weight);

    if (canEatArr.length === 0) {
      console.log(time);
      return;
    }
    const sortCanEatArr = sort(canEatArr);
    const [nx, ny, distance] = sortCanEatArr.at(-1);

    time += distance;
    start = [nx, ny];
    eatCnt++;

    if (eatCnt === weight) {
      eatCnt = 0;
      weight++;
    }
  }
}

let input = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input[0];
const dx = [1, -1, 0, 0];
const dy = [0, 0, -1, 1];

solution();

```다른방법
function sort(array) {
  return array.sort((a, b) => {
    if (a[0] !== b[0]) {
      return b[0] - a[0];
    }
    return b[1] - a[1];
  });
}

function bfs(map, start, weight, eatCnt) {
  const visited = Array.from(Array(n), () => Array(n).fill(false));
  let queue = [start];
  [x, y] = start;
  visited[x][y] = true;
  map[x][y] = 0;

  for (let i = 1; i < n * n; i++) {
    const nextQ = [];
    const canEat = [];
    while (queue.length) {
      [x, y] = queue.shift();
      for (let k = 0; k < 4; k++) {
        const nx = x + dx[k];
        const ny = y + dy[k];
        if (nx >= n || nx < 0 || ny >= n || ny < 0) {
          continue;
        }

        if (!visited[nx][ny] && map[nx][ny] <= weight) {
          nextQ.push([nx, ny]);
          visited[nx][ny] = true;
          if (map[nx][ny] < weight && map[nx][ny] !== 0) {
            canEat.push([nx, ny]);
          }
        }
      }
    }

    if (canEat.length) {
      const eatFishIndex = sort(canEat);
      [x, y] = eatFishIndex.at(-1);
      map[x][y] = 9;
      eatCnt++;
      if (eatCnt === weight) {
        eatCnt = 0;
        weight++;
      }
      return { next: [x, y], length: i, eatCnt, weight };
    }

    if (!nextQ.length) {
      return { length: 0 };
    }

    queue = [...nextQ];
  }
}

function solution() {
  let weight = 2;
  let start;
  let eatCnt = 0;
  let time = 0;

  const map = input.slice(1).map((str) => str.split(" ").map(Number));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (map[i][j] === 9) {
        start = [i, j];
      }
    }
  }

  while (true) {
    const obj = bfs(map, start, weight, eatCnt);
    if (obj.length === 0) {
      console.log(time);
      return;
    }
    time += obj.length;
    start = obj.next;
    weight = obj.weight;
    eatCnt = obj.eatCnt;
  }
}

let input = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input[0];
const dx = [1, -1, 0, 0];
const dy = [0, 0, -1, 1];

solution();
```;
