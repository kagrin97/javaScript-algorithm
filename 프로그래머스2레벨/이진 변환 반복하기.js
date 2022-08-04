function solution(s) {
  var ans = [];
  let zeroRemove = 0,
    transCnt = 0,
    zeroCnt = 0;

  while (s !== "1") {
    for (let i = 0; i < s.length; i++) {
      if (s[i] === "0") {
        zeroRemove += 1;
        zeroCnt += 1;
      }
    }
    s = (s.length - zeroRemove).toString(2);
    transCnt += 1;
    zeroRemove = 0;
  }

  return [transCnt, zeroCnt];
}

const s = "110010101001";

console.log(solution(s));
