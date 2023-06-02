const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 디지털 숫자와 실제 값을 맵핑
const obj = {
  "063": "0",
  "010": "1",
  "093": "2",
  "079": "3",
  106: "4",
  103: "5",
  119: "6",
  "011": "7",
  127: "8",
  107: "9",
};

rl.on("line", function (line) {
  if (line === "BYE") {
    rl.close();
  } else {
    const numbers = line.split("+");
    let B = numbers[1].split("=")[0];
    solution(numbers[0], B);
  }
});

function solution(A, B) {
  let strA = convertSegmentToNum(A); // 나열된 2진수들을 10진수로 변환
  let strB = convertSegmentToNum(B);

  // 더한후 10진수를 디지털로 변환하기 위한 중간 변환
  let totalNum = String(Number(strA) + Number(strB)).split("");

  let result = "";
  for (let num of totalNum) {
    // 객체의 값으로 객체의 키를 찾는 로직
    result += Object.entries(obj).find(([k, v]) => v === num)[0];
  }

  console.log(`${A}+${B}=${result}`);
}

function convertSegmentToNum(segment) {
  let str = "";

  for (let i = 0; i < segment.length; i += 3) {
    const code = segment.slice(i, i + 3);
    str += obj[code];
  }

  return str;
}
