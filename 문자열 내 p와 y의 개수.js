function solution(s) {
  var sumP = 0;
  var sumY = 0;

  const p = s.match(/p/gi); // match함수는 문자열의 갯수를 알려준다
  const y = s.match(/y/gi); // i는 대소문자를 구분하지 않는다는 것

  if (p != null) {
    sumP += p.length; // p가 null일떄 길이를 재면 에러나 난가 undefind
  }
  if (y != null) {
    sumY += y.length;
  }

  if (sumP != sumY) {
    return false;
  }
  return true;
}

s = "pPoooyY";
console.log(solution(s));
