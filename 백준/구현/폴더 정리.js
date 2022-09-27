const line = require("fs").readFileSync("./input.txt", "utf8");
const inputData = line.trim().split("\n");

const [n, m] = inputData[0].split(" ").map((val) => +val);

const flieObj = {};
let fileCnt = 0;

for (let i = 1; i < n + m + 1; i++) {
  const [root, cur, type] = inputData[i].split(" ");

  if (flieObj[root]) {
    flieObj[root].push([cur, +type]);
  } else {
    flieObj[root] = [];
    flieObj[root].push([cur, +type]);
  }
}

function findFile(targeFolder, tmp) {
  if (!flieObj[targeFolder]) {
    return;
  }

  for (let arr of flieObj[targeFolder]) {
    const [name, type] = arr;
    if (type === 0) {
      fileCnt += 1;
      tmp.add(name);
    } else {
      findFile(name, tmp);
    }
  }
}

const q = +inputData[n + m + 1];

for (let i = n + m + 2; i < n + m + 2 + q; i++) {
  const targeFolder = inputData[i].split("/").at(-1).trim();
  const tmp = new Set();
  fileCnt = 0;
  findFile(targeFolder, tmp);
  console.log(tmp.size, fileCnt);
}
