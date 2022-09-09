function validAnagram(string1, string2) {
  let a = {};
  let b = {};

  // 객체에 키가있으면 키값에 +1 없으면 0에 + 1
  for (let str of string1) {
    a[str] = (a[str] || 0) + 1;
  }

  for (let str of string2) {
    b[str] = (b[str] || 0) + 1;
  }

  for (let key in a) {
    // a의 키가 b의 키에 없으면 false
    if (!(key in b)) {
      return false;

      // a의 키값이 b의 키값과 다르면 false
    } else {
      if (a[key] !== b[key]) {
        return false;
      }
    }
  }
  return true;
}

validAnagram("", ""); // true
validAnagram("aaz", "zza"); // false
validAnagram("anagram", "nagaram"); // true
validAnagram("rat", "car"); // false) // false
validAnagram("awesome", "awesom"); // false
validAnagram("amanaplanacanalpanama", "acanalmanplanpamana"); // false
validAnagram("qwerty", "qeywrt"); // true
validAnagram("texttwisttime", "timetwisttext"); // true

// 평범하게 풀었다면 2중 for문으로 빅오가 n제곱이였지만 이렇게 풀면 n이다.
