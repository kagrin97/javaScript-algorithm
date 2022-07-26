function solution(citations) {
  let ans = 0,
    val = 0;
  let maxH = Math.max(...citations);
  if (maxH == 0) {
    return 0;
  }
  for (let i = 1; i < maxH + 1; i++) {
    let cnt = 0;
    for (let j = 0; j < citations.length; j++) {
      if (i <= citations[j]) {
        cnt += 1;
      }
    }
    if (i <= cnt) {
      val = i;
    } else {
      return val;
    }
  }
}
const citations = [3, 0, 6, 1, 5];

console.log(solution(citations));
