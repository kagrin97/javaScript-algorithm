function solution(n, words) {
  let s = [],
    num = 0,
    order = 1;

  for (let i = 0; i < words.length; i++) {
    num += 1;
    if (num > n) {
      num = 1;
      order += 1;
    }
    if (s.length) {
      if (
        s[s.length - 1][s[s.length - 1].length - 1] != words[i][0] ||
        s.includes(words[i])
      ) {
        return [num, order];
      }
      s.push(words[i]);
    } else {
      s.push(words[i]);
    }
  }

  return [0, 0];
}
const n = 3;
const words = [
  "tank",
  "kick",
  "know",
  "wheel",
  "land",
  "dream",
  "mother",
  "robot",
  "tank",
];
console.log(solution(n, words));
