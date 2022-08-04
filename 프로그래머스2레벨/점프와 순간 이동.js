function solution(n) {
  var ans = 0;

  for (let i of n.toString(2)) {
    if (i === "1") {
      ans += 1;
    }
  }

  return ans;
}

const n = 5000;

console.log(solution(n));
