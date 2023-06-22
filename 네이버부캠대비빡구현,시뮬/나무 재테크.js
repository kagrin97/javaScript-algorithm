let input = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const dy = [-1, -1, 0, 1, 1, 1, 0, -1];
const dx = [0, 1, 1, 1, 0, -1, -1, -1];

const [N, M, K] = input[0].split(" ").map(Number);

// 매 년 마다 뿌려야할 비료 정보.
const update = input.slice(1, 1 + N).map((i) => i.split(" ").map(Number));

// 초기 밭의 비료
const map = Array.from({ length: N }, () => Array(N).fill(5));

// [x, y, 나이, 살아있는지 여부]
let trees = input.slice(1 + N).map((i) => i.split(" ").map(Number));
for (let i = 0; i < trees.length; i++) {
  const [x, y, age] = trees[i];
  trees[i] = [x - 1, y - 1, age, "alive"];
}

// 나이순 정렬
trees.sort((a, b) => a[2] - b[2]);

for (let t = 0; t < K; t++) {
  // 봄
  // 뒤에서부터 (어린순서부터 죽는지 여부 확인)
  for (let tree = trees.length - 1; tree >= 0; tree--) {
    const [x, y, age] = trees[tree];
    // 양분이 충분하면
    if (map[x][y] >= age) {
      map[x][y] -= age;
      trees[tree][2]++; // 나이 증가
    }
    // 양분이 부족하면 죽음 처리
    else {
      trees[tree][3] = "death";
    }
  }

  // 여름
  trees = trees.filter((el) => {
    if (el[3] === "alive") return true; // 살아있으면 필터링
    // 죽은 양분 흡수
    else {
      const [x, y, age, _] = el;
      map[x][y] += Math.floor(age / 2);
      return false;
    }
  });

  //가을
  // 5로 나눠지면 8방향 번식 => tree 뒤에 삽입
  trees.forEach((el) => {
    const [x, y, age, _] = el;

    // 번식 가능
    if (age % 5 === 0) {
      for (let k = 0; k < 8; k++) {
        const [nx, ny] = [x + dx[k], y + dy[k]];

        if (ny < 0 || nx < 0 || ny >= N || nx >= N) continue;
        trees.push([nx, ny, 1, "alive"]); // 트리 배열뒤에 삽입
      }
    }
  });

  // 겨울
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      map[i][j] += update[i][j];
    }
  }
}

console.log(trees.length);
