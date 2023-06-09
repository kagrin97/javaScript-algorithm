const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const [R, C] = input[0].split(" ").map(Number);
const K = Number(input[1]);
const indexK = input.slice(2, 1 + K + 1).map((i) => i.split(" ").map(Number));
let robotIndex = input[K + 2].split(" ").map(Number);
const direction = input[K + 3].split(" ").map(Number);

const directionObj = {
  1: "U",
  2: "D",
  3: "L",
  4: "R",
};

const directionIndex = {
  U: [-1, 0],
  D: [1, 0],
  L: [0, -1],
  R: [0, 1],
};

// 현재 로봇의 방향
let curRobotDirection = directionObj[direction[0]];

// [1,2,3,4] => [U,D,L,R]로 변환
for (let k = 0; k < 4; k++) {
  if (direction[k] === 1) direction[k] = "U";
  if (direction[k] === 2) direction[k] = "D";
  if (direction[k] === 3) direction[k] = "L";
  if (direction[k] === 4) direction[k] = "R";
}

// [U,D,L,R] => { U: 'D', D: 'L', L: 'R', R: 'U' }로 다음 전환 방향 객체 생성
const nextDirection = {};
for (let k = 0; k < 4; k++) {
  if (k === 3) {
    nextDirection[direction[k]] = direction[0];
    break;
  }
  nextDirection[direction[k]] = direction[k + 1];
}

// 방문여부
const visitedBoard = Array.from(Array(R), () => Array(C).fill(false));

// 장애물 방문 처리
indexK.forEach((ik) => {
  const [x, y] = ik;
  visitedBoard[x][y] = true;
});

// 초기 로봇 위치를 방문 처리
visitedBoard[robotIndex[0]][robotIndex[1]] = true;

let canNotMoveCnt = 0; // 값이 4가 될떄 로봇은 움직일수 없음
while (true) {
  const x = robotIndex[0];
  const y = robotIndex[1];

  let nx = x + directionIndex[curRobotDirection][0];
  let ny = y + directionIndex[curRobotDirection][1];

  // 벽을 만남
  if (nx < 0 || ny < 0 || nx >= R || ny >= C) {
    curRobotDirection = nextDirection[curRobotDirection]; // 로봇 방향전환
    canNotMoveCnt++;

    // 값이 4가 될떄 로봇은 움직일수 없기 때문에 while 종료
    if (canNotMoveCnt === 4) break;

    // 값이 4가 아닐경우 while문을 다시 한바퀴 돈다
    continue;
  }

  // 방문한곳이나 장애물을 만남
  if (visitedBoard[nx][ny] === true) {
    curRobotDirection = nextDirection[curRobotDirection]; // 로봇 방향전환
    canNotMoveCnt++;

    // 값이 4가 될떄 로봇은 움직일수 없기 때문에 while 종료
    if (canNotMoveCnt === 4) break;

    // 값이 4가 아닐경우 while문을 다시 한바퀴 돈다
    continue;
  }

  // 밑의 코드는 로봇의 이동이 가능할 경우 동작하는 로직
  canNotMoveCnt = 0;
  robotIndex = [nx, ny]; // 로봇 위치를 다음 위치로
  visitedBoard[nx][ny] = true; // 방문처리
}

console.log(...robotIndex);
