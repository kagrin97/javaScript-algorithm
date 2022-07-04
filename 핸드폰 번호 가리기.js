function solution(phone_number) {
  return phone_number.slice(-4).padStart(phone_number.length, "*");
  // slice는 맨뒤에 4글자만 잘르는 것이다
  // padStart는 첫번째 인자는 원하는 문자열 길이, 두번째는 채울 문자이다.
}
const phone_number = "01033334444";

console.log(solution(phone_number));
