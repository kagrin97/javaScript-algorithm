const line = require("fs").readFileSync("./input.txt", "utf8");
let pay = +line.trim();

let coin = 0;

while (pay > 0) {
  if (pay % 5 === 0) {
    coin += parseInt(pay / 5);
    break;
  } else {
    pay -= 2;
    coin += 1;
  }
}

if (pay < 0) {
  console.log(-1);
} else {
  console.log(coin);
}
