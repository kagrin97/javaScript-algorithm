function check(s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (stack.length == 0) {
      stack.push(s[i]);
    } else {
      if (s[i] == ")" && stack[stack.length - 1] == "(") {
        stack.pop();
      } else if (s[i] == "]" && stack[stack.length - 1] == "[") {
        stack.pop();
      } else if (s[i] == "}" && stack[stack.length - 1] == "{") {
        stack.pop();
      } else {
        stack.push(s[i]);
      }
    }
  }
  if (stack.length) {
    return false;
  }
  return true;
}

function solution(s) {
  var ans = 0;

  if (check(s)) {
    ans += 1;
  }

  for (let i = 0; i < s.length - 1; i++) {
    s = s.slice(1) + s[0];
    if (check(s)) {
      ans += 1;
    }
  }
  return ans;
}

const s = "[](){}";

console.log(solution(s));
