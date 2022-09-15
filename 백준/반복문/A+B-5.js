const fs = require("fs");
const inputData = fs.readFileSync("./input.txt").toString().trim().split("\n");

for (let i = 0; i < inputData.length; i++) {
  const a = +inputData[i].split(" ")[0];
  const b = +inputData[i].split(" ")[1];

  if (a + b === 0) {
    break;
  } else {
    console.log(a + b);
  }
}
