function solution(s) {
  var num = [],
    ans = [];
  let string = s.slice(2, -2).split("},{");

  for (let str of string) {
    str = str.split(",");
    num.push(str);
  }
  num.sort((a, b) => a.length - b.length); // 배열 길이순으로 오름차순 정렬

  num.forEach((list) => {
    for (let i of list) {
      if (!ans.includes(parseInt(i))) {
        ans.push(parseInt(i));
        break;
      }
    }
  });
  return ans;
}
const s = "{{2},{2,1},{2,1,3},{2,1,3,4}}";

console.log(solution(s));
