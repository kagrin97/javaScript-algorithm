function solution(n, arr1, arr2) {
  var ans = [];
  let string = "";
  let a, b;
  for (i = 0; i < n; i++) {
    a = arr1[i].toString(2).padStart(n, "0");
    b = arr2[i].toString(2).padStart(n, "0");
    for (j = 0; j < n; j++) {
      if ((a[j] == 1) | (b[j] == 1)) {
        string += "#";
      } else {
        string += " ";
      }
    }
    ans.push(string);
    string = "";
  }

  return ans;
}
const n = 6;
const arr1 = [46, 33, 33, 22, 31, 50];
const arr2 = [27, 56, 19, 14, 14, 10];

console.log(solution(n, arr1, arr2));
