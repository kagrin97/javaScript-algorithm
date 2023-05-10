let input = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);

// 책의 갯수가 0이라면 0을 출력후 종료
if (N === 0) {
  console.log(0);
  process.exit(0);
}

const bookWeightArr = input[1].split(" ").map(Number);

let curWeight = 0;
let boxCount = 0;

bookWeightArr.forEach((weight, index) => {
  // 현재 무게에 책 무게를 더해줌
  curWeight += weight;

  // 현재 무게가 최대 박스의 적재 무게를 넘어서면 curWeight를 weigth로 초기화후 cnt++
  if (curWeight > M) {
    curWeight = weight;
    boxCount++;
  }
  // 현재 무게와 적재 무게가 동일하면 0으로 초기화후 cnt++
  else if (curWeight === M) {
    curWeight = 0;
    boxCount++;
  }
});

// 남은 현재 무게가 존재하면 cnt++
if (curWeight > 0) boxCount++;

console.log(boxCount);
