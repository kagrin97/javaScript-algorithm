function solution(price, money, count) {
  var ans = 0;

  for (i = 1; i <= count; i++) {
    ans += price * i;
  }
  if (ans > money) {
    return ans - money;
  }

  return 0;
}

const price = 5;
const money = 5;
const count = 5;

console.log(solution(price, money, count));
