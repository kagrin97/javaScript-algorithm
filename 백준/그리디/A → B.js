const line = require("fs").readFileSync("./input.txt", "utf8");
let inputData = line.trim();

let [a, b] = inputData.split(" ");

let cnt = 1;

while (+b > +a) {
  if (b[b.length - 1] === "1") {
    cnt += 1;
    b = b.slice(0, b.length - 1);
  } else if (+b % 2 === 0) {
    cnt += 1;
    b = String(parseInt(b / 2));
  } else {
    console.log(-1);
    process.exit(0);
  }
}

if (+b < +a) {
  console.log(-1);
  process.exit(0);
}

console.log(cnt);
