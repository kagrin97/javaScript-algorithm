function solution(s) {
  var string = [];
  var tmp = "";

  for (i of s) {
    if (i == " ") {
      if (tmp != "") {
        string.push(tmp);
      }
      string.push(" ");
      tmp = "";
    } else {
      tmp += i;
    }
  }
  string.push(tmp);

  var ans = [];
  for (i of string) {
    var tmp = "";
    if (i != " ") {
      even = true;
      for (s of i) {
        if (even) {
          ans.push(s.toUpperCase());
          even = false;
        } else {
          ans.push(s.toLowerCase());
          even = true;
        }
      }
    } else {
      ans.push(" ");
    }
  }
  return ans.join("");
}

const s = "try hello world";

console.log(solution(s));
