function solution(arr1, arr2) {
  for (i = 0; i < arr1.length; i++) {
    for (j = 0; j < arr1[i].length; j++) {
      arr1[i][j] += arr2[i][j];
    }
  }

  return arr1;
}

const arr1 = [
  [1, 2],
  [2, 3],
];
const arr2 = [
  [3, 4],
  [5, 6],
];

console.log(solution(arr1, arr2));
