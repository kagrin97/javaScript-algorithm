function solution(numbers, hand) {
  var ans = "";
  let keypad = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    "*": [3, 0],
    0: [3, 1],
    "#": [3, 2],
  };
  let curL = keypad["*"];
  let curR = keypad["#"];

  for (i of numbers) {
    if ([1, 4, 7].includes(i)) {
      ans += "L";
      curL = keypad[i];
    } else if ([3, 6, 9].includes(i)) {
      ans += "R";
      curR = keypad[i];
    } else {
      distanceL =
        Math.abs(curL[0] - keypad[i][0]) + Math.abs(curL[1] - keypad[i][1]);
      distanceR =
        Math.abs(curR[0] - keypad[i][0]) + Math.abs(curR[1] - keypad[i][1]);
      if (distanceL > distanceR) {
        ans += "R";
        curR = keypad[i];
      } else if (distanceL < distanceR) {
        ans += "L";
        curL = keypad[i];
      } else {
        if (hand == "left") {
          ans += "L";
          curL = keypad[i];
        } else {
          ans += "R";
          curR = keypad[i];
        }
      }
    }
  }

  return ans;
}

const numbers = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5];
const hand = "right";
console.log(solution(numbers, hand));
