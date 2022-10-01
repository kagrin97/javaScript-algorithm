const line = require("fs").readFileSync("./input.txt", "utf8");
let [n, healthList] = line.trim().split("\n");

healthList = healthList.split(" ").map(BigInt);
healthList.sort((a, b) => (a < b ? -1 : 1));

let maxHealth = -1;

if (n % 2 != 0) {
  let lastHealth = healthList.pop();
  while (healthList.length) {
    let lossMuscle = healthList.shift() + healthList.pop();
    if (maxHealth < lossMuscle) {
      maxHealth = lossMuscle;
    }
  }
  if (maxHealth < lastHealth) {
    maxHealth = lastHealth;
  }
} else {
  while (healthList.length) {
    let lossMuscle = healthList.shift() + healthList.pop();
    if (maxHealth < lossMuscle) {
      maxHealth = lossMuscle;
    }
  }
}

console.log(String(maxHealth));
