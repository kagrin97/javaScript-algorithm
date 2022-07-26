function getPermutations(arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((el) => [el]);
  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permutations = getPermutations(rest, selectNumber - 1);
    const attached = permutations.map((el) => [fixed, ...el]);
    results.push(...attached);
  });

  return results; // 결과 담긴 results return
}

function solution(k, dungeons) {
  let ans = 0;
  let per = getPermutations(dungeons, dungeons.length);

  for (let i = 0; i < per.length; i++) {
    let cnt = 0,
      kTmp = k;
    for (let j = 0; j < per[i].length; j++) {
      if (kTmp >= per[i][j][0]) {
        kTmp -= per[i][j][1];
        cnt += 1;
      } else {
        break;
      }
    }
    if (cnt > ans) {
      ans = cnt;
    }
  }
  return ans;
}
const k = 80;
const dungeons = [
  [80, 20],
  [50, 40],
  [30, 10],
];
console.log(solution(k, dungeons));
