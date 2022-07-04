function solution(n) {
  var ans = "";

  for (i = 0; i < n; i++) {
    if (ans.length == 0) {
      ans += "수";
    } else if (ans[ans.length - 1] == "수") {
      ans += "박";
    } else if (ans[ans.length - 1] == "박") {
      ans += "수";
    }
  }

  return ans;
}

const n = 3;

console.log(solution(n));

// function solution(n) {
//   return "수박".repeat(n).slice(0,n);
// }

// 바로위의 방법은 다른 사람의 풀이인데 repeat는 n만큼 수박을 반복한다
// n이 3이면 수박수박수박을 반복하고 0부터 n까지 짤른다.
