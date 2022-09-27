const line = require("fs").readFileSync("./input.txt", "utf8");
const inputData = line.trim().split("\n");

const n = +inputData[0];

const numList = [];
let notGroup = 0;

for (let i = 1; i < n + 1; i++) {
  numList.push(inputData[i].trim());
}

numList.forEach((val, idx) => {
  let tmp = [];
  for (let str of val) {
    if (tmp.includes(str)) {
      if (tmp.at(-1) !== str) {
        notGroup += 1;
        break;
      }
    } else {
      tmp.push(str);
    }
  }
});

console.log(n - notGroup);
