function findMax(inputData) {
  let tmp = [];
  let maxNum = "";

  inputData.forEach((val) => {
    if (val === "M") {
      tmp.push(val);
    } else {
      if (!tmp.length) {
        maxNum += "5";
      } else {
        if (tmp.at(-1) === "M") {
          let a = "5";
          a = a.padEnd(tmp.length + 1, "0");
          maxNum += a;
          tmp = [];
        }
      }
    }
  });

  if (tmp.length) {
    tmp.forEach((val) => {
      if (val === "M") {
        maxNum += "1";
      } else {
        maxNum += "5";
      }
    });
  }

  return maxNum;
}

function findMin(inputData) {
  let tmp2 = [];
  let minNum = "";

  inputData.forEach((val) => {
    if (val === "K") {
      if (tmp2.length) {
        let a = "1";
        a = a.padEnd(tmp2.length, "0");
        minNum += a;
        tmp2 = [];
      }
      minNum += "5";
    } else {
      tmp2.push(val);
    }
  });

  if (tmp2.length) {
    if (tmp2[0] === "M") {
      let a = "1";
      a = a.padEnd(tmp2.length, "0");
      minNum += a;
    } else {
      minNum += "5";
    }
  }
  return minNum;
}

const line = require("fs").readFileSync("./input.txt", "utf8");
let inputData = line.trim().split("");

const maxNum = findMax(inputData);
const minNum = findMin(inputData);

console.log(maxNum);
console.log(minNum);
