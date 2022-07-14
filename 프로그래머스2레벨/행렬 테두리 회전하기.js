function solution(rows, columns, queries) {
  var answer = [];
  let map = Array.from(Array(rows), () => new Array(columns)); // 2차원 배열 생성
  let num = 1;

  for (let i = 0; i < rows; i++) {
    // 2차원배열에 1부터 rows*columns까지 숫자 넣기
    for (let j = 0; j < columns; j++) {
      map[i][j] = num;
      num += 1;
    }
  }

  const mins = []; // 작은값들

  queries.map((query) => {
    const [x1, y1, x2, y2] = query.map((_) => _ - 1); // 인덱스값들을 1씩 줄여줌

    let min = map[x1][y1], // 현재 최소값
      tmp = map[x1][y1]; // 쩌리 칸의 값

    for (let i = x1; i < x2; i++) {
      // 좌측
      map[i][y1] = map[i + 1][y1];
      min = Math.min(min, map[i][y1]);
    }
    for (let i = y1; i < y2; i++) {
      // 상단
      map[x2][i] = map[x2][i + 1];
      min = Math.min(min, map[x2][i]);
    }
    for (let i = x2; i > x1; i--) {
      // 우측
      map[i][y2] = map[i - 1][y2];
      min = Math.min(min, map[i][y2]);
    }
    for (let i = y2; i > y1; i--) {
      // 하단
      map[x1][i] = map[x1][i - 1];
      min = Math.min(min, map[x1][i]);
    }
    map[x1][y1 + 1] = tmp; // 쩌리값을 넣어줌

    mins.push(min);
  });

  return mins;
}

const rows = 6;
const columns = 6;
const queries = [
  [2, 2, 5, 4],
  [3, 3, 6, 6],
  [5, 1, 6, 3],
];
console.log(solution(rows, columns, queries));
