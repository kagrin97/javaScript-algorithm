const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

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
  let strA = convertSegmentToNum(A);
  let strB = convertSegmentToNum(B);

  let totalNum = String(Number(strA) + Number(strB)).split("");

  let result = "";
  for (let num of totalNum) {
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
