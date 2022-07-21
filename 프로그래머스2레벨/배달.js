function bfs(start, maps, distance, K) {
  let q = [start],
    cnt = 0;
  distance[start] = 0;

  while (q.length) {
    let y = q.shift();
    for (let x = 1; x < maps.length; x++) {
      if (maps[y][x] != 0) {
        if (
          distance[x] > distance[y] + maps[y][x] &&
          distance[y] + maps[y][x] <= K
        ) {
          distance[x] = distance[y] + maps[y][x];
          q.push(x);
        }
      }
    }
  }

  distance.forEach((val) => {
    if (val <= K) {
      cnt += 1;
    }
  });
  return cnt;
}

function solution(N, road, K) {
  var ans = 0;
  let distance = new Array(N + 1).fill(500000);
  let maps = Array.from(Array(N + 1), () => new Array(N + 1).fill(0));

  for (let i of road) {
    let from = i[0],
      to = i[1],
      w = i[2];
    if (maps[from][to] == 0 && maps[to][from] == 0) {
      (maps[from][to] = w), (maps[to][from] = w);
    } else {
      if (w < maps[from][to]) {
        (maps[from][to] = w), (maps[to][from] = w);
      }
    }
  }

  return bfs(1, maps, distance, K);
}

const N = 5;
const road = [
  [1, 2, 1],
  [2, 3, 3],
  [5, 2, 2],
  [1, 4, 2],
  [5, 3, 1],
  [5, 4, 2],
];
const K = 3;
console.log(solution(N, road, K));
