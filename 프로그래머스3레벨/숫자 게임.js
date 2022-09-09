function solution(A, B) {
  let count = 0;
  A = A.sort((a, b) => b - a);
  B = B.sort((a, b) => a - b);

  A.forEach((aCurVal) => {
    const bMaxVal = B.at(-1);
    if (aCurVal < bMaxVal) {
      count++;
      B.pop();
    }
  });
  return count;
}

const A = [5, 1, 3, 7];
const B = [2, 2, 6, 8];

console.log(solution(A, B));
