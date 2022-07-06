function permutation(x) {
  for (i = 2; i < x; i++) {
    if (x % i == 0) {
      return false;
    }
  }
  return true;
}

function combination(arr, num) {
  const res = [];
  if (num === 1) return arr.map((v) => [v]);

  arr.forEach((v, idx, arr) => {
    const rest = arr.slice(idx + 1);
    const combinations = combination(rest, num - 1);
    const attach = combinations.map((combination) => [v, ...combination]);
    res.push(...attach);
  });
  return res;
}

function solution(nums) {
  var ans = 0;

  let c = combination(nums, 3);
  for (i of c) {
    i = i.reduce((acc, cur) => acc + cur);
    if (permutation(i)) {
      ans += 1;
    }
  }
  return ans;
}

const nums = [1, 2, 7, 6, 4];

console.log(solution(nums));
