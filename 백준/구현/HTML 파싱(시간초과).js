const line = require("fs").readFileSync("./input.txt", "utf8");
const inputData = line.trim().slice(6, line.length - 7);

let ans = [];
let tmp = "";
let title = "";

for (let i = 0; i < inputData.length; i++) {
  if (tmp === '<div title="') {
    if (inputData[i] === ">") {
      const titleName = title.slice(0, title.length - 1);
      ans.push([`title : ${titleName}`]);
      title = "";
      tmp = "";
      continue;
    }
    title += inputData[i];
  } else if (tmp.slice(0, 3) === "<p>") {
    let pClean = "";
    let flag = false;

    if (tmp.slice(tmp.length - 4, tmp.length) === "</p>") {
      pAll = tmp.slice(3, tmp.length - 4);
      for (let p of pAll) {
        if (p === "<") {
          flag = true;
        } else if (p === ">") {
          flag = false;
        } else if (!flag) {
          pClean += p;
        }
      }
      pClean = pClean.trim();

      pClean = pClean.replace(/  /g, " ");
      ans.push([pClean]);
      tmp = "";
    }
    tmp += inputData[i];
  } else if (tmp.slice(tmp.length - 6, tmp.length) === "</div>") {
    tmp = "<";
  }

  else {
    tmp += inputData[i];
  }
}

ans.forEach((val) => {
  console.log(...val);
});
