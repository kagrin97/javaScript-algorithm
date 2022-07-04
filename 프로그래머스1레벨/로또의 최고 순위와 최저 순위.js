function solution(lottos, win_nums) {
  var ans = [0, 0];
  let zero = lottos.filter((element) => 0 == element).length;
  // 0의 갯수를 세주는 코드
  let worst = 0;
  for (i of lottos) {
    if (win_nums.includes(i)) {
      worst += 1;
    }
  }
  let best = worst + zero;

  if (best == 6) {
    ans[0] = 1;
  } else if (best == 5) {
    ans[0] = 2;
  } else if (best == 4) {
    ans[0] = 3;
  } else if (best == 3) {
    ans[0] = 4;
  } else if (best == 2) {
    ans[0] = 5;
  } else {
    ans[0] = 6;
  }

  if (worst == 6) {
    ans[1] = 1;
  } else if (worst == 5) {
    ans[1] = 2;
  } else if (worst == 4) {
    ans[1] = 3;
  } else if (worst == 3) {
    ans[1] = 4;
  } else if (worst == 2) {
    ans[1] = 5;
  } else {
    ans[1] = 6;
  }
  return ans;
}

const lottos = [44, 1, 0, 0, 31, 25];
const win_nums = [31, 10, 45, 1, 6, 19];

console.log(solution(lottos, win_nums));
