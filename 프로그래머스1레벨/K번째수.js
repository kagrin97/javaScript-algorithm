function solution(array, commands) {
  var ans = [];

  for (i = 0; i < commands.length; i++) {
    ans.push(
      array.slice(commands[i][0] - 1, commands[i][1]).sort((a, b) => a - b)[
        commands[i][2] - 1
      ]
      // 배열을 자른다음 정렬후 k번쨰 값을 가져옴
    );
  }

  return ans;
}

const array = [1, 5, 2, 6, 3, 7, 4];
const commands = [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3],
];

console.log(solution(array, commands));
