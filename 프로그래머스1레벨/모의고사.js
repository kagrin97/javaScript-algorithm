function solution(answers) {
  var answer = [0, 0, 0];
  let ans = [];
  let one = [1, 2, 3, 4, 5];
  let two = [2, 1, 2, 3, 2, 4, 2, 5];
  let three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let oneI, twoI, threeI, maxVal;

  for (i = 0; i < answers.length; i++) {
    oneI = i % one.length;
    twoI = i % two.length;
    threeI = i % three.length;
    if (answers[i] == one[oneI]) {
      answer[0] += 1;
    }
    if (answers[i] == two[twoI]) {
      answer[1] += 1;
    }
    if (answers[i] == three[threeI]) {
      answer[2] += 1;
    }

    maxVal = Math.max(...answer);
  }

  for (i = 0; i < 3; i++) {
    if (answer[i] == maxVal) {
      ans.push(i + 1);
    }
  }
  return ans;
}

const answers = [1, 3, 2, 4, 2];

console.log(solution(answers));
