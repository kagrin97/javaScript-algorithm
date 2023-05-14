let input = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

function makePalindrome(str) {
  // 알파벳  A ~ Z 까지의 배열을 만들고 출연 빈도를 저장할 배열
  const frequency = new Array(26).fill(0);

  // 출연 빈도 삽입
  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i) - "A".charCodeAt(0);
    frequency[charCode]++;
  }

  let oddCount = 0;
  let oddChar = "";

  for (let i = 0; i < 26; i++) {
    // 출연 빈도가 홀수이면 대칭x이고 정중앙에 딱하나면 해당 알파벳이 들어갈수있음
    if (frequency[i] % 2 === 1) {
      oddCount++;
      oddChar = String.fromCharCode(i + "A".charCodeAt(0));
    }
  }

  // 정중앙에 하나의 글자만 가능한데 불가능하기 때문에 I'm Sorry Hansoo
  if (oddCount > 1) {
    return "I'm Sorry Hansoo";
  }

  let palindrome = "";

  // 알파벳을 A~Z까지 검사하면서 대칭가능한(2배수)를 찾고 왼쪽 팰린드롬 문자열을 만듦
  for (let i = 0; i < 26; i++) {
    const char = String.fromCharCode(i + "A".charCodeAt(0));
    const count = Math.floor(frequency[i] / 2);

    palindrome += char.repeat(count);
  }

  // 왼쪽 팰린드롬 + 정중앙(홀수개만 가능) + 왼쪽 팰린드롬을 반전
  return palindrome + oddChar + palindrome.split("").reverse().join("");
}

const result = makePalindrome(...input);
console.log(result);
