function solution(s, n) {
  var ans = "";
  for (a of s) {
    if (a == " ") {
      ans += " ";
    } else if (65 <= a.charCodeAt(0) && a.charCodeAt(0) <= 90) {
      if (a.charCodeAt(0) + n <= 90) {
        ans += String.fromCharCode(a.charCodeAt(0) + n);
      } else {
        ans += String.fromCharCode(64 + (n - (90 - a.charCodeAt(0))));
      }
    } else if (97 <= a.charCodeAt(0) && a.charCodeAt(0) <= 122) {
      if (a.charCodeAt(0) + n <= 122) {
        ans += String.fromCharCode(a.charCodeAt(0) + n);
      } else {
        ans += String.fromCharCode(96 + (n - (122 - a.charCodeAt(0))));
      }
    }
  }

  return ans;
}

const s = "a B z";
const n = 4;

console.log(solution(s, n));

// a.charCodeAt(0) 는 s문자열의0번쨰 인덱스값을 아스키코드로 변환해준다
// String.fromCharCode(숫자) 는 숫자를 문자로 바꿔준다
