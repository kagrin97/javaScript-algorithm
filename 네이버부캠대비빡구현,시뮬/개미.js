let input = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const [N1, N2] = input[0].split(" ").map(Number);
const leftGroup = input[1].split("").reverse().join("");
const rightGroup = input[2];
const T = Number(input[3]);

let curRoad = leftGroup + rightGroup;

// T가 0일때
if (T === 0) {
  console.log(curRoad);
  process.exit(0);
}

// 개미 움직이기
for (let i = 0; i < T; i++) {
  let changeIndex = [];
  // 0 ~ curRoad.length - 1 까지 오른쪽을 검사함
  for (let a = 0; a < curRoad.length - 1; a++) {
    if (leftGroup.split("").includes(curRoad[a])) {
      // 만약 현재 왼쪽그룹 개미이며 다음 개미는 오른쪽그룹 개미이면  changeIndex에 추가
      if (rightGroup.split("").includes(curRoad[a + 1])) {
        changeIndex.push([a, a + 1]);
      }
    }
  }

  // 움직일 개미가 존재하면 개미를 움직여줌
  if (changeIndex.length) {
    changeIndex.forEach((i) => {
      const [left, right] = i;
      curRoad =
        curRoad.substring(0, left) +
        curRoad[right] +
        curRoad[left] +
        curRoad.substring(right + 1);
    });
  }
}

console.log(curRoad);
