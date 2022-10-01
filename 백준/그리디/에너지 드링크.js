const line = require("fs").readFileSync("./input.txt", "utf8");
let [n, drinkList] = line.trim().split("\n");

drinkList = drinkList.split(" ").map(Number);
drinkList.sort((a, b) => a - b);

while (drinkList.length > 1) {
  let throwDrink = drinkList.shift() / 2;
  let newDrink = drinkList.pop();
  newDrink += throwDrink;
  drinkList.push(newDrink);
}
console.log(...drinkList);
