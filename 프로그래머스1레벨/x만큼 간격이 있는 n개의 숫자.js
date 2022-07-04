function solution(x, n) {
  var ans = [];
  var val = x;

  while (ans.length < n) {
    ans.push(x);
    x += val;
  }
  return ans;
}

const x = 2;
const n = 5;

console.log(solution(x, n));
