const line = require("fs").readFileSync("./input.txt", "utf8");
const inputData = line.trim().split("");

let result = [];
let tmp = [];
let tagFlag = false;

inputData.forEach((val, idx) => {
  if (val === "<") {
    if (tmp.length) {
      tagFlag = true;
      result.push(tmp.reverse().join(""));
      tmp = [];
      tmp.push(val);
    } else {
      tagFlag = true;
      tmp.push(val);
    }
  } else if (tagFlag && val != ">") {
    tmp.push(val);
  } else if (tagFlag && val === ">") {
    tmp.push(val);
    result.push(tmp.join(""));
    tmp = [];
    tagFlag = false;
  } else if (!tagFlag && val != " ") {
    tmp.push(val);
  } else if (!tagFlag && val === " ") {
    result.push(tmp.reverse().join(""));
    result.push(" ");
    tmp = [];
  }
});
if (tmp.length) {
  result.push(tmp.reverse().join(""));
}
console.log(result.join(""));
