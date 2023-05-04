// 필요한 모듈을 불러옵니다.
const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

// 입력값을 처리합니다.
const N = Number(input[0]);
const balloons = input[1].split(" ").map(Number);

// 높이별 풍선을 맞출 수 있는 화살의 수를 저장할 배열입니다.
const arrows = new Array(N + 1).fill(0);
let arrowCount = 0; // 사용한 화살의 총 개수

for (const height of balloons) {
  // 해당 높이(height)에서 화살이 남아있으면 화살을 하나 사용하고, 남은 화살 수를 하나 줄입니다.
  if (arrows[height] > 0) {
    arrows[height]--;
  } else {
    // 해당 높이에서 화살이 없으면 화살을 하나 추가하고, 화살 개수를 증가시킵니다.
    arrowCount++;
  }

  // 높이를 하나 낮춘 위치에서 화살을 사용할 수 있도록 합니다.
  arrows[height - 1]++;
}

// 결과를 출력합니다.
console.log(arrowCount);

// 그러니까 arrows 배열은 0~N까지의 높이를가진 화살통이라고 생각하면된다.
// for (const height of balloons) 을 돌면서 else 즉 해당 높이에 화살이 없으면 화살을 추가하고 해당 높이에 화살이 존재하면 해당 화살을 1줄인다. 모든 조건문을 완료후에는 어떻게든 화살을 쏜 상태이므로
// 그전 높이의 화살도 쏠수있도록 arrows[height - 1]++를 해준다
