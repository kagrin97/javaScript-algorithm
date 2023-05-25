const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const cardList = input.map((i) =>
  i.split(" ").map((c, index) => (index === 1 ? Number(c) : c))
);

const number = {}; // 카드의 숫자 정보를 기입할 객체
const color = {}; // 카드의 색깔 정보를 기입할 객체

let maxValue = 0; // 최대값

// number, color 객체를 채워나감
for (let i = 0; i < 5; i++) {
  const [col, num] = cardList[i];
  if (number[num]) {
    number[num] += 1;
  } else {
    number[num] = 1;
  }

  if (color[col]) {
    color[col] += 1;
  } else {
    color[col] = 1;
  }
}

// 1번 규칙
// 카드의 모든색이 같고 숫자가 모두 연속적일때
for (let col in color) {
  if (color[col] === 5) {
    const values = Object.keys(number);
    const max = Math.max(...values);
    const min = Math.min(...values);

    if (max - min === 4) {
      maxValue = Math.max(maxValue, max + 900);
    }
  }
}

// 2번 규칙
// 같은 숫자의 카드가 4개일떄
for (let num in number) {
  if (number[num] === 4) {
    maxValue = Math.max(maxValue, Number(num) + 800);
  }
}

// 3번 규칙
// 같은 숫자의 카드가 3장 + 나머지 중 같은 숫자의 카드가 2장 일떄
let threeNumberCnt = 0,
  threeNumber = 0;
let twoNumberCnt = 0,
  twoNumber = [];

for (let num in number) {
  if (number[num] === 3) {
    threeNumber = Number(num);
    threeNumberCnt++;
  }
  if (number[num] === 2) {
    twoNumber.push(Number(num));
    twoNumberCnt++;
  }
}

if (threeNumberCnt && twoNumberCnt) {
  maxValue = Math.max(maxValue, threeNumber * 10 + twoNumber[0] + 700);
}

// 4번 규칙
// 5장의 카드 모두가 같은 색깔일떄
for (let col in color) {
  if (color[col] === 5) {
    const values = Object.keys(number).map(Number);
    const maxCardNumber = Math.max(...values);
    maxValue = Math.max(maxValue, maxCardNumber + 600);
  }
}

// 5번 규칙
// 5장의 카드의 숫자가 연속적일때
const values = Object.keys(number).map(Number);
const max = Math.max(...values);
const min = Math.min(...values);
if (max - min === 4) {
  maxValue = Math.max(maxValue, max + 500);
}

// 6번 규칙
// 오직 3장의 카드의 숫자가 같을떄
if (threeNumberCnt && !twoNumberCnt) {
  maxValue = Math.max(maxValue, threeNumber + 400);
}

// 7번 규칙
// 같은 2장의 카드의 숫자, 나머지 중 같은 숫자의 카드 2장일때
if (twoNumberCnt === 2) {
  twoNumber.sort((a, b) => b - a);
  maxValue = Math.max(maxValue, twoNumber[0] * 10 + twoNumber[1] + 300);
}

// 8번 규칙
// 2장의 카드가 같은 숫자일떄
if (twoNumberCnt === 1) {
  maxValue = Math.max(maxValue, twoNumber[0] + 200);
}

// 9번 규칙
// 어디에도 해당이 안될떄
if (maxValue === 0) {
  maxValue = max + 100;
}

console.log(maxValue);
