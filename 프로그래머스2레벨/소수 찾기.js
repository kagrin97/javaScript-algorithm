function primeNumber(n) {
  // 소수 판별
  if (n == 1) return false;
  for (let i = 2; i < n; i++) {
    if (n % i == 0) return false;
  }
  return true;
}

function permutation(arr, num) {
  // 순열
  const res = [];
  if (num === 1) return arr.map((v) => [v]);
  arr.forEach((v, idx, arr) => {
    const rest = [...arr.slice(0, idx), ...arr.slice(idx + 1)];
    const permutations = permutation(rest, num - 1);
    const attach = permutations.map((permutation) => [v, ...permutation]);
    res.push(...attach);
  });
  return res;
}

function solution(numbers) {
  var ans = new Set(); // 중복 제거
  let tmp = [];
  let num = numbers.split("");

  for (let i = 1; i < num.length + 1; i++) {
    tmp.push(...permutation(num, i)); // 모든 순열을 배열에 저장
  }

  tmp.forEach((val) => {
    let n = Number(val.join(""));
    if (n >= 2) {
      if (primeNumber(n)) {
        // 소수 판별
        ans.add(n);
      }
    }
  });

  return ans.size;
}
const numbers = "17";

console.log(solution(numbers));
