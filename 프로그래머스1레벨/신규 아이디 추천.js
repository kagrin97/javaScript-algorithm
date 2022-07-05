function solution(new_id) {
  let checkEng = /[a-zA-Z]/; // 영어 판별
  var ans = "";
  var string = [...new_id]; // split('')와 기능이 같음
  for (s of string) {
    if (checkEng.test(s)) {
      // 영어이면 소문자로 바꿔줌
      ans += s.toLowerCase();
    } else {
      ans += s;
    }
  } // 1단계

  ans = [...ans];
  let tmp = "";
  let checkNum = /[0-9]/; // 숫자 판별
  var checkSpecial = /[-_.]/; // 특수문자 판별
  for (s of ans) {
    if (checkEng.test(s) || checkNum.test(s) || checkSpecial.test(s)) {
      tmp += s;
    }
  } // 2단계

  while (tmp.includes("..")) {
    tmp = tmp.replace("..", ".");
  } // 3단계

  if (tmp.length == 1 && tmp == ".") {
    tmp = "";
  } else {
    if (tmp[0] == ".") {
      tmp = tmp.slice(1); // index 0값 삭제
    } else if (tmp[tmp.length - 1] == ".") {
      tmp = tmp.slice(0, -1); // 마지막 값 삭제
    }
  } // 4단계

  if (tmp.length == 0) {
    tmp += "a";
  } // 5단계

  if (tmp.length >= 16) {
    tmp = tmp.slice(0, 15);
  }
  if (tmp[tmp.length - 1] == ".") {
    tmp = tmp.slice(0, -1);
  } // 6단계

  while (tmp.length <= 2) {
    tmp += tmp[tmp.length - 1];
  } // 7단계

  return tmp;
}

const new_id = "...!@BaT#*..y.abcdefghijklm";

console.log(solution(new_id));
