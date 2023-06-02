// 소수점 2번쨰 자리부터 반올림
function numberRounding(num) {
  return (Math.round(num * 100) / 100).toFixed(2);
}

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, K] = input[0].split(" ");
const numList = input
  .slice(1)
  .map(Number)
  .sort((a, b) => a - b);

// 절사 평균을 위한 더함
const zulsaSum = numList
  .slice(K, numList.length - K)
  .reduce((pre, cur) => pre + cur);

// 절사 평균
const zulsaAverage = numberRounding(zulsaSum / (N - K * 2));

// 보정 평균 리스트
const bojung = numList.slice(K, numList.length - K);

// 보정 평균에 앞뒤로 값들을 넣어줌
for (let i = 0; i < K; i++) {
  bojung.push(bojung[bojung.length - 1]);
  bojung.unshift(bojung[0]);
}

// 보정 평균
const bojungAverage = numberRounding(
  bojung.reduce((pre, cur) => pre + cur) / N
);

console.log(zulsaAverage);
console.log(bojungAverage);
