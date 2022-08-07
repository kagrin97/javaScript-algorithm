function solution(dirs) {
  let away = new Set();
  let move = { U: [-1, 0], D: [1, 0], L: [0, -1], R: [0, 1] };
  let x = 0,
    y = 0;

  for (let i of dirs) {
    let nx = x + move[i][0];
    let ny = y + move[i][1];

    if (-5 <= nx && nx <= 5 && -5 <= ny && ny <= 5) {
      away.add("" + x + y + nx + ny); // set은 중복 배열을 인식하지 못해서 문자열로 바꾼다음 set에 넣어 줘야했음
      away.add("" + nx + ny + x + y);
      x = nx;
      y = ny;
    }
  }
  return away.size / 2;
}

const dirs = "ULURRDLLU";

console.log(solution(dirs));
