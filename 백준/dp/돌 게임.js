let input = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim();

input = +input;

if (input % 2 === 0) {
  console.log("CY");
} else {
  console.log("SK");
}
