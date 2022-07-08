function solution(d, budget) {
  var ans = 0;
  var cnt = 0;
  d = d.sort((a, b) => a - b);

  for (i of d) {
    if (ans + i > budget) {
      break;
    } else {
      ans += i;
      cnt += 1;
    }
  }
  return cnt;
}

const d = [1, 3, 2, 5, 4];
const budget = 9;

console.log(solution(d, budget));
