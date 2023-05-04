const input = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]);

const arr = input.slice(1).map((val) => {
  const [num, name] = val.split(" ");
  return [Number(num), name.trim()];
});

arr.sort((a, b) => a[0] - b[0]);

arr.forEach((val) => {
  console.log(...val);
});
