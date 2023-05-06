let input = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, K] = input[0].split(" ").map(Number);

// 로봇 내구도 배열
const beltArr = input[1].split(" ").map(Number);
// 로봇 존재여부 배열
const stayRobots = Array.from({ length: N }, () => false);

let curStage = 1;
let endCnt = 0;

while (true) {
  // 내구도 벨트 회전
  const right = beltArr.pop();
  beltArr.unshift(right);

  // 로봇 벨트 회전
  stayRobots.pop();
  stayRobots.unshift(false);

  // N-1번쨰 벨트부터 0번쨰 벨트위치까지 로봇을 옮김
  for (let i = N - 1; i >= 0; i--) {
    // 내리는 위치일경우 로봇을 내림
    if (i === N - 1) {
      stayRobots[i] = false;
      continue;
    }

    // 현재 i에 로봇이 존재하며 i+1 위치에 로봇이 없으며 내구도가 1이상일 경우 로봇을 옮김
    if (stayRobots[i] === true) {
      if (beltArr[i + 1] > 0 && stayRobots[i + 1] === false) {
        stayRobots[i] = false;
        stayRobots[i + 1] = true;
        beltArr[i + 1] -= 1;
      }
    }
  }

  // 내구도 벨트의 올리는 위치에 내구도가 1이상일 경우 로봇을 올림
  if (beltArr[0] > 0) {
    stayRobots[0] = true;
    beltArr[0] -= 1;
  }

  // 내구도 벨트를 검사해 0값이 K개 이상일경우 현재 스테이지를 출력후 종료
  endCnt = beltArr.filter((val) => val === 0).length;
  if (endCnt >= K) {
    console.log(curStage);
    break;
  }

  // 한 바퀴 돌때마다 스테이지 +1
  curStage++;
}
