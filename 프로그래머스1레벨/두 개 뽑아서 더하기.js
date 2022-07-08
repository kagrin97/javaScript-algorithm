function getPermutations(arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((el) => [el]);
  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permutations = getPermutations(rest, selectNumber - 1);
    const attached = permutations.map((el) => [fixed, ...el]);
    results.push(...attached);
  });

  return results;
}

function solution(numbers) {
  var answer = [];
  let per = getPermutations(numbers, 2); // 순열을 구한다
  let set = new Set();
  for (i of per) {
    set.add(i[0] + i[1]);
  }

  return [...set].sort((a, b) => a - b); // 배열로변환후 오름차순 정렬
}

const numbers = [2, 1, 3, 4, 1];

console.log(solution(numbers));
