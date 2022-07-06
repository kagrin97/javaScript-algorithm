function solution(a, b) {
  var ans = 0;

  for (i = 0; i < a.length; i++) {
    ans += a[i] * b[i];
  }

  return ans;
}

const a = [1, 2, 3, 4];
const b = [-3, -1, 0, 2];

console.log(solution(a, b));
