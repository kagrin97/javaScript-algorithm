let input = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const [U, N] = input[0].split(" ").map(Number);
const nameArr = input.slice(1).map((i) => i.split(" "));
const obj = {};

// obj = { price : [personCnt, [names..]]} 생성
nameArr.forEach((arr) => {
  const [name, price] = arr;

  if (obj[price]) {
    obj[price][0] += 1;
    obj[price][1].push(name);
  } else {
    obj[price] = [1, [name]];
  }
});

function compare(a, b) {
  // personCnt가 동일하면 가격 오름차순 정렬
  if (a[1][0] === b[1][0]) {
    return a[0] - b[0];
  }

  // personCnt 오름차순 정렬
  return a[1][0] - b[1][0];
}

// 객체를 배열 형태로 변환 [price, [personCnt, [names..]]] 후 정렬
arr = Object.entries(obj).sort(compare);

// 제일 personCnt가 적고 가격이 낮고 제일 먼저 제시한 사람을 출력, 가격출력
console.log(arr[0][1][1][0], arr[0][0]);
