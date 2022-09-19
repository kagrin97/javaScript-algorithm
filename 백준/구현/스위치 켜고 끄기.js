const line = require("fs").readFileSync("./input.txt", "utf8");
const inputData = line.trim().split("\n");

const sC = +inputData[0];

const switchBoard = inputData[1]
  .trim()
  .split(" ")
  .map((val) => +val);

const hC = +inputData[2].trim();

for (let i = hC + 1; i < hC + 1 + hC; i++) {
  const [sex, number] = inputData[i].split(" ").map((val) => +val);
  const tmp = [number - 1];

  if (sex === 1) {
    for (let j = number - 1; j < sC; j += number) {
      if (switchBoard[j] === 1) {
        switchBoard[j] = 0;
      } else {
        switchBoard[j] = 1;
      }
    }
  } else {
    if (number != 1) {
      tmp.push(number - 1);
      const minVal = Math.min(number - 1, sC - number);
      for (let k = 1; k < minVal + 1; k++) {
        if (switchBoard[number - 1 - k] != switchBoard[number - 1 + k]) {
          break;
        }
        tmp.push(number - 1 - k), tmp.push(number - 1 + k);
      }
    }
  }
  if (tmp.length) {
    tmp.forEach((val) => {
      if (switchBoard[val] === 1) {
        switchBoard[val] = 0;
      } else {
        switchBoard[val] = 1;
      }
    });
  }
}
const result = [];
let tmp = [];

switchBoard.forEach((val) => {
  if (tmp.length === 20) {
    result.push(tmp);
    tmp = [];
  } else {
    tmp.push(val);
  }
});
result.push(tmp);

result.forEach((val) => {
  console.log(...val);
});
