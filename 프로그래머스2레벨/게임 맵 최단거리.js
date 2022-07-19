function bfs(maps, n, m) {
  let q = [[0, 0]];
  let visited = Array.from(Array(n), () => new Array(m).fill(false));
  let distance = Array.from(Array(n), () => new Array(m).fill(0));
  visited[0][0] = true;
  let dx = [0, 0, -1, 1],
    dy = [1, -1, 0, 0];

  while (q.length) {
    let [x, y] = q.shift();
    for (let k = 0; k < 4; k++) {
      let nx = x + dx[k],
        ny = y + dy[k];
      if (0 <= nx && 0 <= ny && nx < n && ny < m && maps[nx][ny] == 1) {
        if (distance[nx][ny] == 0 && visited[nx][ny] == false) {
          visited[nx][ny] = true;
          distance[nx][ny] = distance[x][y] + 1;
          q.push([nx, ny]);
        }
      }
    }
  }
  return distance;
}

function solution(maps) {
  var ans = 0;
  let n = maps.length,
    m = maps[0].length;
  let b = bfs(maps, n, m);

  if (b[n - 1][m - 1] == 0) {
    return -1;
  }
  return b[n - 1][m - 1] + 1;
}

const maps = [
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 1],
  [0, 0, 0, 0, 1],
];

console.log(solution(maps));
