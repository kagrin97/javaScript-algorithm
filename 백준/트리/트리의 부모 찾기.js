const line = require("fs").readFileSync("./input.txt", "utf8");
let inputData = line.trim().split("\n");

const n = +inputData[0];
let tree = {};

for (let i = 1; i < inputData.length; i++) {
  const [n1, n2] = inputData[i].split(" ").map(Number);
  if (tree[n1]) {
    tree[n1].push(n2);
  } else {
    tree[n1] = [n2];
  }

  if (tree[n2]) {
    tree[n2].push(n1);
  } else {
    tree[n2] = [n1];
  }
}

let q = [1];
let ans = {};
let check = Array(n + 1).fill(false);

while (q.length) {
  const parent = q.shift();
  for (let i of tree[parent]) {
    if (!check[i]) {
      ans[i] = parent;
      q.push(i);
      check[i] = true;
    }
  }
}

let result = "";
for (let i = 2; i < n + 1; i++) {
  result += ans[i] + "\n";
}
console.log(result);
