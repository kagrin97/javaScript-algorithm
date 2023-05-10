let input = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);

const board = input.slice(1).map((i) => i.split(""));
const result = Array.from(Array(N), () => Array(N).fill(0));

const direction = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],
];

// 지뢰 위치를 저장할 배열
const arr = [];

for (let x = 0; x < N; x++) {
  for (let y = 0; y < N; y++) {
    // 지뢰가 아닐경우 넘어가기
    if (board[x][y] === ".") {
      continue;
    }
    // 지뢰 위치를 배열 형태로 넣어줌
    else {
      arr.push([x, y]);
    }

    // 8방향 검사
    for (let d of direction) {
      let nx = x + d[0];
      let ny = y + d[1];

      // 범위를 넘어갈 경우 넘기기
      if (0 > nx || 0 > ny || N <= nx || N <= ny) continue;

      // 이미 M 상태이면 넘기기
      if (result[nx][ny] === "M") continue;

      // 더한 값이 9를 넘어서면 M으로 변환
      if (Number(board[x][y]) + result[nx][ny] > 9) {
        result[nx][ny] = "M";
      }
      // 더한 값이 9 아래이면 더해주기
      else {
        result[nx][ny] += Number(board[x][y]);
      }
    }
  }
}

// 지뢰가 서로 인접해있을경우 *때문에 더하기 수행이 불가능 해지기 때문에 나중에 지뢰 위치를 *로 변환
arr.forEach((a) => {
  const [x, y] = a;
  result[x][y] = "*";
});

result.forEach((r) => console.log(r.join("")));
