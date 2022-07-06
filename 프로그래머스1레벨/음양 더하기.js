function solution(absolutes, signs) {
  for (i = 0; i < signs.length; i++) {
    if (signs[i] == false) {
      absolutes[i] *= -1;
    }
  }
  return absolutes.reduce((acc, cur) => acc + cur);
}

const absolutes = [4, 7, 12];
const signs = [true, false, true];

console.log(solution(absolutes, signs));
