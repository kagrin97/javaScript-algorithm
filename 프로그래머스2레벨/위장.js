function solution(clothes) {
  var ans = 1;
  const dict = {};
  clothes.forEach((val) => {
    if (val[1] in dict) {
      dict[val[1]] += 1;
    } else {
      dict[val[1]] = 2;
    }
  });

  for (let dic in dict) {
    ans *= dict[dic];
  }
  return ans - 1;
}
const clothes = [
  ["yellow_hat", "headgear"],
  ["blue_sunglasses", "eyewear"],
  ["green_turban", "headgear"],
];

console.log(solution(clothes));
