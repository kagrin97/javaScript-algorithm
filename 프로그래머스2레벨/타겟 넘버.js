function solution(numbers, target) {
  var tree = [0];
  let sub;
  for (i of numbers) {
    sub = [];
    for (j of tree) {
      sub.push(j + i);
      sub.push(j - i);
    }
    tree = sub;
  }
  return tree.filter((e) => e == target).length;
}

const numbers = [1, 1, 1, 1, 1];
const target = 3;
console.log(solution(numbers, target));
