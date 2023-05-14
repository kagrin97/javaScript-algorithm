const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n, m;
let data = [];

rl.on("line", function (line) {
  if (!n && !m) {
    [n, m] = line.split(" ").map(Number);

    if (n === 0 && m === 0) {
      rl.close();
    }
  } else {
    const numbers = line.split(" ").map(Number);
    data.push(numbers);

    if (data.length === n) {
      solution(n, m, data);

      n = 0;
      m = 0;
      data = [];
    }
  }
});

function solution(n, m, data) {
  const rankObj = {};

  // rankObj에 키:백넘버 값:포인트
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      const playerNumber = data[i][j];
      if (rankObj[playerNumber]) rankObj[playerNumber] += 1;
      else rankObj[playerNumber] = 1;
    }
  }

  // rankObj를 배열로 변환후 포인트 내림차순 정렬
  const rankArr = Object.entries(rankObj).sort((a, b) => b[1] - a[1]);
  // 포인트 1위가 한명이므로 1번인덱스가 2등 포인트임
  const secondPoint = rankArr[1][1];

  // 2등 포인트를 가진 모든 선수를 배열에 저장
  const secondPlayer = [];
  rankArr.forEach((rank) => {
    const [number, point] = rank;
    if (point === secondPoint) secondPlayer.push(Number(number));
  });

  // 2등 선수들의 백넘버 오름차순 정렬
  secondPlayer.sort((a, b) => a - b);

  console.log(...secondPlayer);
}
