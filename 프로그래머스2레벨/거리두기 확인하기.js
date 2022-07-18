function bfs(p) {
  let start = [];
  let dx = [-1, 1, 0, 0],
    dy = [0, 0, -1, 1];

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (p[i][j] == "P") {
        start.push([i, j]);
      }
    }
  }
  for (let s of start) {
    let q = [s];
    let visited = Array.from(Array(5), () => new Array(5).fill(0)); // 방문여부 2차원배열
    let distance = Array.from(Array(5), () => new Array(5).fill(0)); // 거리 2차원배열
    visited[s[0]][s[1]] = 1; // 현재위치 방문처리

    while (q.length) {
      let [x, y] = q.shift(); // 현재위치 x, y

      for (let k = 0; k < 4; k++) {
        let nx = x + dx[k];
        let ny = y + dy[k];

        if (0 <= nx && 0 <= ny && nx < 5 && ny < 5 && visited[nx][ny] == 0) {
          if (p[nx][ny] == "O") {
            q.push([nx, ny]);
            visited[nx][ny] = 1;
            distance[nx][ny] = distance[x][y] + 1;
          } else if (p[nx][ny] == "P" && distance[x][y] <= 1) {
            // 다른 사람을 만났는데 전위치에서 거리가 1이하면 안됨
            return 0;
          }
        }
      }
    }
  }
  return 1;
}

function solution(places) {
  var ans = [];

  for (let i of places) {
    ans.push(bfs(i));
  }

  return ans;
}
const places = [
  ["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"],
  ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"],
  ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"],
  ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"],
  ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"],
];

console.log(solution(places));
