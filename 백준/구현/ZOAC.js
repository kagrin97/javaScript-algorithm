const line = require("fs").readFileSync("./input.txt", "utf8");
const inputData = line;

const str = inputData.trim().split("");
const tmp = Array(str.length).fill("");

function abc(arr, start) {
  if (!arr.length) {
    return;
  }
  const copy = arr.slice();
  const minAlpha = copy.sort()[0];
  const minIdx = arr.indexOf(minAlpha);
  tmp[start + minIdx] = minAlpha;
  console.log(tmp.join(""));
  abc(arr.slice(minIdx + 1), start + minIdx + 1);
  abc(arr.slice(0, minIdx), start);
}

abc(str, 0);
