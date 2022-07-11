function solution(s) {
  var ans = 0;
  let minLen = s.length;
  let tmp, a;

  for (cut = 1; cut < s.length / 2 + 1; cut++) {
    tmp = [];
    for (i = 0; i < s.length; i += cut) {
      if (tmp.length == 0) {
        tmp.push(1);
        tmp.push(s.slice(i, i + cut));
      } else {
        if (tmp[tmp.length - 1] == s.slice(i, i + cut)) {
          tmp[tmp.length - 2] += 1;
        } else {
          tmp.push(1);
          tmp.push(s.slice(i, i + cut));
        }
      }
    }

    a = [];
    for (i of tmp) {
      if (isNaN(i)) {
        a.push(i);
      } else {
        if (i >= 2) {
          a.push(String(i));
        }
      }
    }
    if (minLen > a.join("").length) {
      minLen = a.join("").length;
    }
  }
  return minLen;
}

const s = "aabbaccc";

console.log(solution(s));
