function recount(block, dx, dy, direction) {
  // y좌표 계산 & x좌표 갱신
  for (let i = 0; i < block; i++) {
    startX += dx;
    startY += dy;
    if (startY < 0) {
      // 범위 밖이면 stop
      break;
    }

    // 3. a, out_sand
    let total = 0; // a 구하기 위한 변수

    for (const [dx, dy, z] of direction) {
      const nx = startX + dx;
      const ny = startY + dy;

      // 원래모래에서 - 퍼진모래 = 이동한 방향에 남은 모래
      let new_sand;
      if (z === 0) {
        new_sand = sand[startX][startY] - total;
      } else if (z !== 0) {
        // 퍼지는 모래양에 모래비율을 곱해준다.
        new_sand = Math.floor(sand[startX][startY] * z);
        total += new_sand;
      }

      if (nx >= 0 && nx < N && ny >= 0 && ny < N) {
        // 인덱스 범위이면 값 갱신
        sand[nx][ny] += new_sand;
      } else {
        // 범위 밖이면 ans 카운트
        ans += new_sand;
      }
    }
  }
}

input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const sand = input.slice(1).map((i) => i.split(" ").map(Number));

// 2. 방향별 모래 비율 위치
const left = [
  [1, 1, 0.01],
  [-1, 1, 0.01],
  [1, 0, 0.07],
  [-1, 0, 0.07],
  [1, -1, 0.1],
  [-1, -1, 0.1],
  [2, 0, 0.02],
  [-2, 0, 0.02],
  [0, -2, 0.05],
  [0, -1, 0],
];
const right = left.map(([x, y, z]) => [x, -y, z]);
const down = left.map(([x, y, z]) => [-y, x, z]);
const up = left.map(([x, y, z]) => [y, x, z]);

let startX = Math.floor(N / 2);
let startY = Math.floor(N / 2); // 시작좌표(x좌표)
let ans = 0; // out_sand

// 1. 이동하는 칸 수
for (let block = 1; block <= N; block++) {
  // 움직이는 칸 수가 홀수인 경우
  if (block % 2 === 1) {
    recount(block, 0, -1, left);
    recount(block, 1, 0, down);
  }

  // 움직이는 칸 수가 짝수인 경우
  else if (block % 2 === 0) {
    recount(block, 0, 1, right);
    recount(block, -1, 0, up);
  }
}

console.log(ans);
