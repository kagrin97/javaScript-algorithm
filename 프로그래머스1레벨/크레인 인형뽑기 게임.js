function solution(board, moves) {
  var ans = 0;
  let stack = [];

  for (m of moves) {
    for (x = 0; x < board.length; x++) {
      if (board[x][m - 1] != 0) {
        if (stack.length >= 1 && stack[stack.length - 1] == board[x][m - 1]) {
          stack.pop();
          ans += 2;
          board[x][m - 1] = 0;
        } else {
          stack.push(board[x][m - 1]);
          board[x][m - 1] = 0;
        }
        break;
      }
    }
  }
  return ans;
}

const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
const moves = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(board, moves));
