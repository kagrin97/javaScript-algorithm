const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const numberObj = {
  "####.##.##.####": 0,
  "###..#####..###": 2,
  "###..####..####": 3,
  "#.##.####..#..#": 4,
  "####..###..####": 5,
  "####..####.####": 6,
  "###..#..#..#..#": 7,
  "####.#####.####": 8,
  "####.####..####": 9,
};

const N = Number(input[0]);
const signal = input[1];

const numSig = [];

const segmentLength = N / 5;

// 각 숫자 세그먼트를 추출하여 배열에 저장
for (let i = 0; i < N; i += segmentLength) {
  numSig.push(signal.slice(i, i + segmentLength));
}

let result = "";

// 숫자 세그먼트를 분석하여 숫자를 추출
for (let i = 0; i < segmentLength; i++) {
  if (numSig[0][i] === "#") {
    // 숫자 1 처리
    if (i === segmentLength - 1) {
      result += "1";
      continue;
    }
    if (numSig[0][i + 1] === "." && numSig[3][i] === "#") {
      result += "1";
      continue;
    }

    let currentNum = "";

    // 숫자 세그먼트를 하나의 문자열로 변환
    for (let j = 0; j < 5; j++) {
      currentNum += numSig[j].slice(i, i + 3);
    }

    // 변환된 문자열을 객체 검색하여 숫자를 추출
    // 여기서 undefined를 명시한 이유는 숫자 0을 numberObj[currentNum]하게되면
    // 0이 추출되어서 false처리가 되게 된다 그러므로 0도 if문에 걸리게하기 위해 undefined로 명시
    if (numberObj[currentNum] !== undefined) {
      result += String(numberObj[currentNum]);
      i += 3; // 다음 숫자로 넘어가기위해 +3을 더해줌
    }
  }
}

console.log(result);
