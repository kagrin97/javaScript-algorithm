const line = require("fs").readFileSync("./input.txt", "utf8");
const inputData = line.trim().split("\n");

const keyBoard1 = {
  q: [0, 0],
  w: [0, 1],
  e: [0, 2],
  r: [0, 3],
  t: [0, 4],
  a: [1, 0],
  s: [1, 1],
  d: [1, 2],
  f: [1, 3],
  g: [1, 4],
  z: [2, 0],
  x: [2, 1],
  c: [2, 2],
  v: [2, 3],
};

const keyBoard2 = {
  y: [0, 5],
  u: [0, 6],
  i: [0, 7],
  o: [0, 8],
  p: [0, 9],
  h: [1, 5],
  j: [1, 6],
  k: [1, 7],
  l: [1, 8],
  b: [2, 4],
  n: [2, 5],
  m: [2, 6],
};

const [a, b] = inputData[0].trim().split(" ");
let left = keyBoard1[a];
let right = keyBoard2[b];
let time = 0;
const alpha = inputData[1].split("");

alpha.forEach((val) => {
  if (val in keyBoard1) {
    const [x1, y1] = left;
    const [x2, y2] = keyBoard1[val];
    const distance = Math.abs(x1 - x2) + Math.abs(y1 - y2);
    time += distance + 1;
    left = keyBoard1[val];
  } else if (val in keyBoard2) {
    const [x1, y1] = right;
    const [x2, y2] = keyBoard2[val];
    const distance = Math.abs(x1 - x2) + Math.abs(y1 - y2);
    time += distance + 1;
    right = keyBoard2[val];
  }
});

console.log(time);
